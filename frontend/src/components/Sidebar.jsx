import { Link } from "react-router-dom";
import { BarChart3, BookOpen, GraduationCap, LayoutDashboard, Settings, Users, Sparkles } from "lucide-react";
import './SidebarStyles.css';

const navigation = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Student Insights", href: "/students", icon: GraduationCap },
  { title: "Faculty Analytics", href: "/faculty", icon: Users },
  { title: "Reports", href: "/reports", icon: BarChart3 },
  { title: "AI Analysis", href: "/chat", icon: Sparkles },
  { title: "Courses", href: "/courses", icon: BookOpen },
  { title: "Settings", href: "/settings", icon: Settings },
];

function AppSidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h3>EduVision</h3>
      </div>
      <ul className="sidebar-nav">
        {navigation.map((item, index) => (
          <li key={index}>
            <Link to={item.href}>
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default AppSidebar;
