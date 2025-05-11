
import React, { useState } from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import { Calendar as CalendarIcon, Plus, Clock, X, Check } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Schedule = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showNewEventForm, setShowNewEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    startTime: '',
    endTime: '',
    description: ''
  });
  const [events, setEvents] = useState<Array<{
    id: string;
    title: string;
    startTime: string;
    endTime: string;
    description: string;
    date: Date;
  }>>([]);
  
  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !newEvent.title || !newEvent.startTime || !newEvent.endTime) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    const event = {
      id: Date.now().toString(),
      ...newEvent,
      date: selectedDate
    };
    
    setEvents([...events, event]);
    
    setNewEvent({
      title: '',
      startTime: '',
      endTime: '',
      description: ''
    });
    
    setShowNewEventForm(false);
    
    toast({
      title: "Event created",
      description: `"${event.title}" has been added to your schedule.`
    });
  };
  
  const deleteEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
    toast({
      title: "Event deleted",
      description: "The event has been removed from your schedule."
    });
  };

  const getEventsForSelectedDate = () => {
    if (!selectedDate) return [];
    return events.filter(event => 
      event.date.toDateString() === selectedDate.toDateString()
    ).sort((a, b) => a.startTime.localeCompare(b.startTime));
  };
  
  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-6 w-6 text-bolt-brightPurple" />
              <h1 className="text-2xl font-bold">Schedule</h1>
            </div>
            
            <Button onClick={() => setShowNewEventForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              New Event
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Calendar */}
            <div className="md:col-span-1">
              <div className="dashboard-card">
                <h2 className="text-lg font-semibold mb-4">Calendar</h2>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className={cn("rounded-md border", "pointer-events-auto")}
                  classNames={{
                    day_selected: "bg-bolt-brightPurple text-primary-foreground hover:bg-bolt-brightPurple hover:text-primary-foreground focus:bg-bolt-brightPurple focus:text-primary-foreground",
                    day_today: "bg-accent text-accent-foreground",
                  }}
                />
              </div>
            </div>
            
            {/* Events */}
            <div className="md:col-span-2">
              <div className="dashboard-card min-h-[500px]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">{selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : 'Select a date'}</h2>
                </div>
                
                {showNewEventForm ? (
                  <div className="bg-secondary p-4 rounded-lg mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">Create New Event</h3>
                      <Button variant="ghost" size="icon" onClick={() => setShowNewEventForm(false)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <form onSubmit={handleCreateEvent} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Event Title*</Label>
                        <Input 
                          id="title"
                          value={newEvent.title}
                          onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                          placeholder="Enter event title"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="startTime">Start Time*</Label>
                          <Input 
                            id="startTime"
                            type="time"
                            value={newEvent.startTime}
                            onChange={(e) => setNewEvent({...newEvent, startTime: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="endTime">End Time*</Label>
                          <Input 
                            id="endTime"
                            type="time"
                            value={newEvent.endTime}
                            onChange={(e) => setNewEvent({...newEvent, endTime: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Input 
                          id="description"
                          value={newEvent.description}
                          onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                          placeholder="Event details (optional)"
                        />
                      </div>
                      
                      <div className="flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={() => setShowNewEventForm(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">
                          Create Event
                        </Button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <>
                    {getEventsForSelectedDate().length > 0 ? (
                      <div className="space-y-3">
                        {getEventsForSelectedDate().map(event => (
                          <div 
                            key={event.id} 
                            className="p-4 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-medium">{event.title}</h3>
                                <div className="flex items-center text-sm text-muted-foreground mt-1">
                                  <Clock className="h-3.5 w-3.5 mr-1" />
                                  <span>{event.startTime} - {event.endTime}</span>
                                </div>
                                {event.description && (
                                  <p className="text-sm mt-2">{event.description}</p>
                                )}
                              </div>
                              
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="text-muted-foreground hover:text-foreground"
                                onClick={() => deleteEvent(event.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-[400px] text-center">
                        <CalendarIcon className="h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">No events scheduled</h3>
                        <p className="text-sm text-muted-foreground mb-6">
                          You don't have any events scheduled for this day.
                        </p>
                        <Button onClick={() => setShowNewEventForm(true)}>
                          <Plus className="h-4 w-4 mr-2" />
                          Add Event
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Schedule;
