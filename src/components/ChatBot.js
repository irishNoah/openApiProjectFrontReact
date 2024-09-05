// https://github.com/FlowiseAI/FlowiseEmbedReact?tab=readme-ov-file
import React, { useEffect } from "react";

const ChatbotIntegration = () => {
  useEffect(() => {
    // Chatbot 라이브러리를 동적으로 로드하고 초기화
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
    script.type = "module";
    script.onload = () => {
      if (window.Chatbot) {
        window.Chatbot.init({
          chatflowid: "29e87b56-a640-4bba-9874-85b94ae48cf0",
          apiHost: "http://192.168.0.52:3000",
          chatflowConfig: {
            // topK: 2
          },
          theme: {
            button: {
              backgroundColor: "#3B81F6",
              right: 20,
              bottom: 20,
              size: "medium",
              iconColor: "white",
              customIconSrc:
                "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
            },
            chatWindow: {
              welcomeMessage:
                "창영이 회사에 방문해주셔서 감사합니다.<br>궁금한 것이 있으시면 물어보세요.<br>시스템 응답개선을 위해서 질문한 내용은 서버에 저장됩니다.",
              backgroundColor: "#ffffff",
              height: 700,
              width: 400,
              fontSize: 16,
              poweredByTextColor: "#ffffff",
              botMessage: {
                backgroundColor: "#f7f8ff",
                textColor: "#303235",
                showAvatar: true,
                avatarSrc:
                  "https://www.gractor.com/assets/img/marker/marker_graactor_48.png",
              },
              userMessage: {
                backgroundColor: "#3B81F6",
                textColor: "#ffffff",
                showAvatar: true,
                avatarSrc:
                  "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
              },
              textInput: {
                placeholder: "모든 질문은 서버에 저장됩니다.",
                backgroundColor: "#ffffff",
                textColor: "#303235",
                sendButtonColor: "#3B81F6",
              },
            },
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // cleanup when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", color: "white", height: "100vh" }}>
      {/* <h1>Chatbot Integration</h1> */}
      {/* <style>
        {`
          body {
            background: linear-gradient(to right, #0072ff, #00c6ff);
          }
        `}
      </style> */}
    </div>
  );
};

export default ChatbotIntegration;
