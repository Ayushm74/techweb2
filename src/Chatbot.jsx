import React, { useState, useEffect, useRef } from "react";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const chatRef = useRef(null);

    // Auto-scroll to the latest message
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        const botResponse = getBotResponse(input);

        setMessages([...messages, userMessage, botResponse]);
        setInput("");
    };

    const getBotResponse = (input) => {
        const lowerInput = input.toLowerCase();
        const responses = {
            "hello": "Hi there! How can I help you?",
            "how are you?": "I'm just a bot, but I'm doing great!",
            "what is react?": "React is a JavaScript library for building UI.",
            "bye": "Goodbye! Have a great day!",
            "default": "I'm not sure about that, but I am learning!"
        };

        return { sender: "bot", text: responses[lowerInput] || responses["default"] };
    };

    return (
        <div>
            {/* Chat Toggle Button */}
            <button onClick={() => setIsOpen(!isOpen)} style={styles.toggleButton}>
                {isOpen ? "✖" : "🤖"}
            </button>
            
            {/* Chat Container */}
            {isOpen && (
                <div style={styles.chatContainer}>
                    <div style={styles.header}>
                        Chatbot 🤖
                        <button onClick={() => setIsOpen(false)} style={styles.closeButton}>✖</button>
                    </div>

                    <div style={styles.chatBox} ref={chatRef}>
                        {messages.map((msg, index) => (
                            <div key={index} style={msg.sender === "user" ? styles.userMessage : styles.botMessage}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div style={styles.inputContainer}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            style={styles.inputField}
                        />
                        <button onClick={sendMessage} style={styles.sendButton}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    toggleButton: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        fontSize: "20px",
        cursor: "pointer",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
    },
    chatContainer: {
        width: "320px",
        height: "400px",
        position: "fixed",
        bottom: "80px",
        right: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#222",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
        color: "white",
        border: "1px solid #444"
    },
    header: {
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between"
    },
    closeButton: {
        background: "none",
        border: "none",
        color: "white",
        fontSize: "16px",
        cursor: "pointer"
    },
    chatBox: {
        flex: 1,
        padding: "10px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    },
    userMessage: {
        alignSelf: "flex-end",
        backgroundColor: "#007bff",
        color: "white",
        padding: "8px 12px",
        borderRadius: "15px",
        maxWidth: "80%"
    },
    botMessage: {
        alignSelf: "flex-start",
        backgroundColor: "#444",
        color: "white",
        padding: "8px 12px",
        borderRadius: "15px",
        maxWidth: "80%"
    },
    inputContainer: {
        display: "flex",
        borderTop: "1px solid #444",
        padding: "8px",
        backgroundColor: "#333"
    },
    inputField: {
        flex: 1,
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #666",
        outline: "none",
        backgroundColor: "#222",
        color: "white"
    },
    sendButton: {
        marginLeft: "8px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer"
    }
};

export default Chatbot;
