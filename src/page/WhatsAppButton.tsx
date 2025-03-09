import React from "react";

// Definir la interfaz para las props
interface WhatsAppButtonProps {
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ message }) => {
  const phoneNumber = "15618905502"; // Número en formato internacional sin "+"

  const sendMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button 
      onClick={sendMessage} 
      style={{
        padding: "10px", 
        fontSize: "16px", 
        backgroundColor: "#25D366", 
        color: "white", 
        border: "none", 
        borderRadius: "5px", 
        cursor: "pointer"
      }}
    >
      Reservar Tratamiento
    </button>
  );
};

export default WhatsAppButton;

