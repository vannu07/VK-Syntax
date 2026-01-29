import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  Code,
  Briefcase,
  FileText,
  Github,
  Mail,
  Home
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useNavigate } from "react-router-dom";
import { projectsData, experienceData, skillCategoriesData, navItems } from "@/data/resume";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Navigation">
            {navItems.map((item, index) => (
              <CommandItem key={index} onSelect={() => runCommand(() => navigate(item.path))}>
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Projects">
            {projectsData.map((project, index) => (
              <CommandItem
                key={index}
                onSelect={() => runCommand(() => {
                    navigate("/projects");
                    // Optional: scroll to project or open details
                    window.open(project.github, '_blank');
                })}
              >
                <Github className="mr-2 h-4 w-4" />
                <span>{project.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Experience">
            {experienceData.map((exp, index) => (
              <CommandItem
                key={index}
                onSelect={() => runCommand(() => navigate("/experience"))}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                <span>{exp.title} at {exp.company}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          
          <CommandGroup heading="Actions">
             <CommandItem onSelect={() => runCommand(() => window.print())}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Print Resume / Save as PDF</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
          </CommandGroup>

        </CommandList>
      </CommandDialog>
    </>
  );
}
