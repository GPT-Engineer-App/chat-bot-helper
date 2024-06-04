import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Box, Text, IconButton } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = { text: "This is a placeholder response from the bot.", sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="60vh" borderWidth="1px" borderRadius="lg" overflowY="auto" p={4}>
          {messages.map((message, index) => (
            <Box key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"} mb={2}>
              <Text bg={message.sender === "user" ? "blue.500" : "gray.300"} color={message.sender === "user" ? "white" : "black"} borderRadius="md" p={2}>
                {message.text}
              </Text>
            </Box>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSend} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
