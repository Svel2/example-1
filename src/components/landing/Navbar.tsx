import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useTheme } from '../theme-provider';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const NavLinks = () => (
    <>
      <a href="#" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">Home</a>
      <a href="#services" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">Services</a>
      <a href="#about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">About Us</a>
      <a href="#contact" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">Contact</a>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">PayView</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 bg-gray-100/50 dark:bg-gray-800/50 px-8 py-3 rounded-full">
            <NavLinks />
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="outline" className="rounded-full px-6 border-gray-300 hover:bg-gray-50 hover:text-indigo-600 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800">
              SIGNUP
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-10">
                  <NavLinks />
                  <Button className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700">
                    SIGNUP
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
