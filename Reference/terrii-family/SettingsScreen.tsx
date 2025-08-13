import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Switch } from "../../ui/switch";
import { ArrowLeft, User, Bell, Shield, Palette, MessageSquare, ChevronRight, Moon, Sun, ArrowUp, Info, Heart, Mail, Phone } from "lucide-react";
import { FamilyMember } from "../TERRiiUIApp";

interface SettingsScreenProps {
  user: FamilyMember | null;
  onBack: () => void;
  onShowUpgrade: () => void;
}

export function SettingsScreen({ user, onBack, onShowUpgrade }: SettingsScreenProps) {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  const settingsSections = [
    {
      title: "Account",
      items: [
        {
          id: "profile",
          label: "Profile Information",
          description: `${user?.name || "Family Member"} • ${user?.relationship || "Relationship"}`,
          icon: User,
          type: "link",
          action: () => console.log("View profile")
        },
        {
          id: "verification",
          label: "Account Verification",
          description: "Verified family member access",
          icon: Shield,
          type: "info",
          status: "verified"
        }
      ]
    },
    {
      title: "Notifications",
      items: [
        {
          id: "push-notifications",
          label: "Push Notifications",
          description: "Receive alerts about new updates",
          icon: Bell,
          type: "toggle",
          value: pushNotifications,
          onChange: setPushNotifications
        },
        {
          id: "email-updates",
          label: "Email Updates",
          description: "Daily summary emails of care updates",
          icon: Mail,
          type: "toggle",
          value: emailUpdates,
          onChange: setEmailUpdates
        }
      ]
    },
    {
      title: "Preferences",
      items: [
        {
          id: "dark-mode",
          label: "Dark Mode",
          description: "Switch to dark theme",
          icon: darkMode ? Moon : Sun,
          type: "toggle",
          value: darkMode,
          onChange: setDarkMode
        },
        {
          id: "language",
          label: "Language",
          description: "English",
          icon: MessageSquare,
          type: "link",
          action: () => console.log("Change language")
        }
      ]
    },
    {
      title: "Support",
      items: [
        {
          id: "contact",
          label: "Contact Care Home",
          description: "Get in touch with Sunny Meadows Care Home",
          icon: Phone,
          type: "link",
          action: () => console.log("Contact care home")
        },
        {
          id: "help",
          label: "Help & FAQ",
          description: "Common questions and support",
          icon: Info,
          type: "link",
          action: () => console.log("Show help")
        }
      ]
    }
  ];

  return (
    <div className="px-6 py-6 pb-24">
      {/* Header */}
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="w-12 h-12 rounded-2xl"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </motion.div>
        
        <div className="flex-1">
          <h1 
            className="text-2xl"
            style={{ 
              fontFamily: 'var(--font-family-secondary)',
              fontWeight: 'var(--font-bold)'
            }}
          >
            Settings
          </h1>
          <p className="text-lg text-gray-600">
            Customize your care updates experience
          </p>
        </div>
      </motion.div>

      {/* Upgrade Card */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card 
          className="border-0 shadow-lg cursor-pointer"
          style={{ 
            background: 'linear-gradient(135deg, #FEF3C7 0%, #E0F2FE 50%, #F0F9FF 100%)',
            borderRadius: 'var(--radius-3xl)'
          }}
          onClick={onShowUpgrade}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <ArrowUp className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ 
                    fontFamily: 'var(--font-family-secondary)',
                    fontWeight: 'var(--font-semibold)'
                  }}
                >
                  Upgrade to ANGii
                </h3>
                <p 
                  className="text-base text-gray-700 mb-3"
                  style={{ 
                    fontFamily: 'var(--font-family-primary)',
                    fontWeight: 'var(--font-normal)'
                  }}
                >
                  Get full access to care planning, private family chat, and your own Circle of Care
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="font-medium text-gray-800">Free trial available</span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Settings Sections */}
      <div className="space-y-8">
        {settingsSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + sectionIndex * 0.1, duration: 0.4 }}
          >
            <h2 
              className="text-lg font-semibold mb-4 px-2"
              style={{ 
                fontFamily: 'var(--font-family-secondary)',
                fontWeight: 'var(--font-semibold)'
              }}
            >
              {section.title}
            </h2>

            <div className="space-y-3">
              {section.items.map((item, itemIndex) => {
                const IconComponent = item.icon;

                if (item.type === "toggle") {
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + sectionIndex * 0.1 + itemIndex * 0.05, duration: 0.4 }}
                    >
                      <Card className="border-0 shadow-sm" style={{ borderRadius: 'var(--radius-2xl)' }}>
                        <CardContent className="p-5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                                <IconComponent className="w-6 h-6 text-gray-600" />
                              </div>
                              <div>
                                <h3 
                                  className="text-base font-medium"
                                  style={{ 
                                    fontFamily: 'var(--font-family-secondary)',
                                    fontWeight: 'var(--font-semibold)'
                                  }}
                                >
                                  {item.label}
                                </h3>
                                <p 
                                  className="text-sm text-gray-600 mt-1"
                                  style={{ 
                                    fontFamily: 'var(--font-family-primary)',
                                    fontWeight: 'var(--font-normal)'
                                  }}
                                >
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            <Switch
                              checked={item.value as boolean}
                              onCheckedChange={item.onChange}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                }

                if (item.type === "info") {
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + sectionIndex * 0.1 + itemIndex * 0.05, duration: 0.4 }}
                    >
                      <Card className="border-0 shadow-sm" style={{ borderRadius: 'var(--radius-2xl)' }}>
                        <CardContent className="p-5">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <h3 
                                className="text-base font-medium"
                                style={{ 
                                  fontFamily: 'var(--font-family-secondary)',
                                  fontWeight: 'var(--font-semibold)'
                                }}
                              >
                                {item.label}
                              </h3>
                              <p 
                                className="text-sm text-gray-600 mt-1"
                                style={{ 
                                  fontFamily: 'var(--font-family-primary)',
                                  fontWeight: 'var(--font-normal)'
                                }}
                              >
                                {item.description}
                              </p>
                            </div>
                            {item.status === "verified" && (
                              <div className="w-2 h-2 bg-green-400 rounded-full" />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                }

                // Default link item
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + sectionIndex * 0.1 + itemIndex * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Card 
                      className="border-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                      style={{ borderRadius: 'var(--radius-2xl)' }}
                      onClick={item.action}
                    >
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                              <h3 
                                className="text-base font-medium"
                                style={{ 
                                  fontFamily: 'var(--font-family-secondary)',
                                  fontWeight: 'var(--font-semibold)'
                                }}
                              >
                                {item.label}
                              </h3>
                              <p 
                                className="text-sm text-gray-600 mt-1"
                                style={{ 
                                  fontFamily: 'var(--font-family-primary)',
                                  fontWeight: 'var(--font-normal)'
                                }}
                              >
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* About Section */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <Card className="border-0 shadow-sm" style={{ borderRadius: 'var(--radius-2xl)' }}>
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 
              className="text-lg mb-2"
              style={{ 
                fontFamily: 'var(--font-family-secondary)',
                fontWeight: 'var(--font-semibold)'
              }}
            >
              TERRii Care Updates
            </h3>
            <p 
              className="text-base text-gray-600 mb-4"
              style={{ 
                fontFamily: 'var(--font-family-primary)',
                fontWeight: 'var(--font-normal)'
              }}
            >
              Version 1.2.0 • Keeping families connected
            </p>
            
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <button className="hover:text-blue-600 transition-colors">Privacy Policy</button>
              <span>•</span>
              <button className="hover:text-blue-600 transition-colors">Terms of Service</button>
              <span>•</span>
              <button className="hover:text-blue-600 transition-colors">Support</button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}