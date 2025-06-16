"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import { Menu, Globe, Wallet, LogOut } from "lucide-react";
import Image from "next/image";

const Dashboard = () => {
  const sidebarItems = [
    { name: "Dashboard", icon: <Menu /> },
    { name: "Payment", icon: <Wallet /> },
    { name: "Surveys", icon: <Globe /> },
    { name: "Logout", icon: <LogOut /> },
  ];

  const roles = [
    { title: "Surveys", count: 5 },
    { title: "Success", count: 8 },
    { title: "Termination", count: 5 },
    { title: "Vouchers", count: 10 },
    { title: "Wallet", count: 10 },
  ];

  const progress = [
    {
      name: "John Doe",
      role: "UI/UX Designer",
      status: "Tech Interview",
    },
    {
      name: "Sam Emmanuel",
      role: "UI/UX Designer",
      status: "Task",
    },
    {
      name: "John Samuel",
      role: "PHP Developer",
      status: "Resume Review",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/*  */}
      <aside className="w-64 bg-white border-r p-4">
        <div className="flex item-center gap-2 mb-6 px-2">
          <Image
            src="/arslogo.png"
            width={32}
            height={32}
            alt="All Research Solution"
            className="object-contain"
          />
          <span className="text-xl font-semibold text-gray-800">ARS</span>
        </div>

        <nav className="space-y-3">
          {sidebarItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 text-gray-700 text-sm font-medium cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 hover:text-primary transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/**/}
      <main className="flex-1 bg-gray-50 p-6">
        {/* */}
         <Card
      className="w-full relative h-100 overflow-hidden rounded-xl shadow-md bg-gradient-to-r from-[#D13DA1] via-[#C940A8] to-[#ff69b4]/30"
      style={{
        backgroundImage:
          "radial-gradient(circle at top left, #d13da1, #c940a8 50%, #ff69b4 100%)",
      }}
    >
      <Image src="/dashboard2.svg" alt="SVG Art" width={500} height={200} className="absolute right-0 top-0 w-1/2 opacity-100" /> 

      <div className="p-6 text-white">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-2xl font-bold">Good Morning Sara</CardTitle>
          <CardDescription className="text-white/80">
            You have 75 new applications. Let's get started!
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <Button variant="secondary">Review It</Button>
        </CardContent>
      </div>
    </Card>

        {/* */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Your Fields</h2>
          <div className="flex gap-4 overflow-x-auto">
            {roles.map((role) => (
              <Card key={role.title} className="min-w-[200px]">
                <CardHeader>
                  <CardTitle className="text-base">{role.title}</CardTitle>
                  <CardDescription>{role.count} Candidates</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Recruitment Progress */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Recruitment Progress</h2>
          <div className="bg-white shadow rounded-lg">
            <div className="grid grid-cols-3 p-4 font-medium text-sm border-b">
              <span>Full Name</span>
              <span>Designation</span>
              <span>Status</span>
            </div>
            {progress.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 p-4 text-sm border-b hover:bg-gray-100"
              >
                <span>{item.name}</span>
                <span>{item.role}</span>
                <span>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
