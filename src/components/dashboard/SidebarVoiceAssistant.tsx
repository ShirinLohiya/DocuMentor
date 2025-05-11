import React from 'react';

const SidebarVoiceAssistant = () => {
  const handleClick = () => {
    const width = 400;
    const height = 600;
    const left = window.innerWidth - width - 20;
    const top = window.innerHeight - height - 20;

    window.open(
      'http://localhost:5173/',
      'Voice Assistant',
      `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars`
    );
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-5 right-5 w-14 h-14 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer z-50"
    >
      💬
    </div>
  );
};

export default SidebarVoiceAssistant;
