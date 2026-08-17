export const resumeData = {
  name: "LE DINH HUNG",
  title: "Network & Security Engineering Intern",
  status: "OPEN TO INTERN / FRESHER ROLES",
  contact: {
    email: "dinhhungle96@gmail.com",
    phone: "0767160324",
    location: "Ho Chi Minh City, Vietnam",
    github: "github.com/hydroheo",
    website: "hydroheo.net",
  },
  skills: {
    networking: ["TCP/IP", "OSI Model", "VLAN", "Subnetting", "Routing", "Wireshark"],
    system: ["Linux (Ubuntu/Kali)", "Windows Server", "WSL", "MDaemon"],
    tools: ["ns-3 Simulator", "Cisco Packet Tracer", "Antigravity IDE", "Git/GitHub"],
    automation: ["Bash Scripting", "Python", "C#"],
  },
  education: {
    school: "HUFLIT",
    degree: "Bachelor of Cybersecurity",
    period: "2023 – Present",
    gpa: "2.72 / 4.0",
  },
  projects: [
    {
      id: "01",
      title: "100-Node Wireless Network Simulation",
      status: "Completed",
      details: [
        "Phát triển kịch bản C++/Python để mô phỏng và vận hành hạ tầng 100 node mạng không dây trên ns-3 simulator.",
        "Cấu hình mô hình di chuyển node và mô phỏng luồng dữ liệu truyền tải TCP/UDP.",
        "Đo đạc và phân tích các chỉ số hiệu năng: Packet Delivery Ratio, độ trễ và thông lượng dưới tải cao.",
      ],
      techStack: ["ns-3", "C++", "Python", "Linux", "Network Simulation"],
    },
    {
      id: "02",
      title: "Small Business Mail Server Deployment",
      status: "Completed",
      details: [
        "Thiết kế và triển khai máy chủ thư điện tử MDaemon mô phỏng cho doanh nghiệp quy mô nhỏ.",
        "Cấu hình hệ thống DNS nội bộ (MX, A records) và các giao thức gửi nhận thư SMTP/POP3/IMAP.",
        "Thiết lập chính sách phân quyền tài khoản và kiểm soát luồng dữ liệu an toàn.",
      ],
      techStack: ["MDaemon", "Windows Server", "DNS", "Mail Security"],
    },
    {
      id: "03",
      title: "Automated Network Host Discovery Tool",
      status: "Completed",
      details: [
        "Xây dựng script tự động hóa trên môi trường Linux (WSL) hỗ trợ quét và phát hiện thiết bị mạng.",
        "Tự động quét dải IP subnet (Ping sweep) và kết xuất danh sách máy chủ đang hoạt động.",
      ],
      techStack: ["Bash Script", "WSL", "Ubuntu", "Networking"],
    }
  ]
};