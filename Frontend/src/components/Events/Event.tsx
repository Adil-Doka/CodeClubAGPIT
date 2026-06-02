import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/Events/carousel";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
  FAST_DIALOG_TRANSITION,
} from "@/components/Events/morphing-dialog";

import { PlusIcon } from "lucide-react";

import { ScrollArea } from "@/components/Events/scroll-area";

import eventData from "@/components/Events/eventData.json";
import { BorderTrail } from "@/components/Events/border-trail";




export function BorderTrailHr() {
  return (
    <div className="relative h-[4px] w-full max-w-[1200px] mx-auto overflow-hidden ">
      {/* Background line base */}
      <div className="absolute inset-0 " />

      {/* Animated border trail */}
      <BorderTrail
        className="bg-gradient-to-r from-blue via-blue-500 to-blue"
        size={1300}
      />
    </div>
  );
}



import activeEvents from "@/components/Events/activeEvent.json";
import Footer from "../ui/Footer";

const boardGallery = [
  {
    title: 'Main Board 2025-26',
    caption: '',
    image: '/25kmainboard.jpeg',
  },
  {
    title: 'Main Board 2024-25',
    caption: '',
    image: '/ogpeople.jpeg',
  },
  {
    title: 'Main Board 2023-24',
    caption: '',
    image: '/students1.jpeg',
  },
];

const mainBoard2025Events = [
  {
    name: 'Android Session',
    description: 'The Code Club conducted an Android Development Workshop led by Avez and Nagesh to introduce students to the basics of mobile app development. Participants learned fundamental Android concepts, UI design principles, and the app development workflow through practical demonstrations, providing a strong foundation for aspiring mobile developers.',
    image1: '/events/mainboard2025-26/android2.jpg.jpeg',
    image2: '/events/mainboard2025-26/android 1.jpg.jpeg',
    image3: '/events/mainboard2025-26/android2.jpg.jpeg',

  },
  {
    name: 'DSA Session',
    description: 'The Code Club conducted a DSA in Java Workshop led by Code Club member Bhumika to help students build a strong foundation in problem-solving and programming. Participants learned key data structures and algorithms using Java, along with their practical applications. The session enhanced students logical thinking and coding skills essential for technical interviews and software development.',
    image1: '/events/mainboard2025-26/dsa.jpg.jpeg',
    image2: '/events/mainboard2025-26/dsa.jpg.jpeg',
    image3: '/events/mainboard2025-26/dsa.jpg.jpeg',
  },
  {
    name: 'Frontend Workshop',
    description: 'AThe Code Club successfully conducted a Front-End Web Development Workshop led by Code Club members Saif, Muzammil, and Shoaib, focused on the basics of HTML, CSS, and JavaScript. Participants learned how websites are structured, styled, and made interactive through hands-on demonstrations and practical examples. The session provided students with a strong foundation in web development and encouraged them to start building their own projects.',
    image1: '/events/mainboard2025-26/frontend1.jpeg',
    image2: '/events/mainboard2025-26/frontend2.jpeg',
    image3: '/events/mainboard2025-26/frontend3.jpeg',
  },
  {
    name: 'Game Development Session',
    description: 'The Code Club conducted a Game Development Workshop led by Code Club member Anjali for junior students. The session introduced participants to the fundamentals of game development, including game design concepts, development tools, and the overall creation process. Through practical examples, students gained insights into how interactive games are built and developed.',
    image1: '/events/mainboard2025-26/gamedev.jpg.jpeg',
    image2: '/events/mainboard2025-26/gamedev.jpg.jpeg',
    image3: '/events/mainboard2025-26/gamedev.jpg.jpeg',
  },
  {
    name: 'GDG Collaboration',
    description: 'The Code Club conducted a GDG on Campus Awareness Session led by Code Club member Bhumika. The session introduced students to the GDG on Campus program, its opportunities, activities, and benefits for aspiring developers. Participants also received valuable guidance and motivation from the Head of Department, encouraging them to actively engage in technical communities and enhance their learning journey.',
    image1: '/events/mainboard2025-26/gdg1.jpeg',
    image2: '/events/mainboard2025-26/gdg1.jpeg',
    image3: '/events/mainboard2025-26/gdg1.jpeg',
  },
  {
    name: 'JavaScript Workshop',
    description: 'The Code Club conducted a JavaScript Concepts Workshop led by Code Club member Meghana to introduce students to the fundamentals of JavaScript. Participants explored core concepts such as variables, functions, loops, conditions, and DOM manipulation through practical examples. The session helped students strengthen their understanding of interactive web development and programming logic.',
    image1: '/events/mainboard2025-26/javascript1.jpeg',
    image2: '/events/mainboard2025-26/javascript2.jpeg',
    image3: '/events/mainboard2025-26/javascript2.jpeg',
    },
  {
    name: 'Recruitment Drive',
    description: 'The Code Club conducted a Recruitment Drive for junior students to welcome new members into the club. The process included aptitude tests, technical interviews, and interactive doubt-solving sessions conducted by Code Club members. The initiative helped identify enthusiastic students while providing them with guidance on technical learning, teamwork, and club activities.',
    image1: '/events/mainboard2025-26/recruitment.jpeg',
    image2: '/events/mainboard2025-26/recruitment.jpeg',
    image3: '/events/mainboard2025-26/recruitment.jpeg',
  },
  {
    name: 'SQL Session',
    description: 'The Code Club conducted an SQL Workshop led by Code Club members Shafi and Adil to introduce students to the fundamentals of database management. Participants learned how to create, retrieve, update, and manage data using SQL queries. The session provided hands-on exposure to working with databases and strengthened students understanding of data organization and management.',
    image1: '/events/mainboard2025-26/sql1.jpeg',
    image2: '/events/mainboard2025-26/sql2.jpeg',
    image3: '/events/mainboard2025-26/sql3.jpeg',
  },
];

const Events = () => {
  const navigate = useNavigate();
  const eventList = activeEvents.activeEvents.slice(3); // Skip first 3 (Active, Upcoming, Past)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [, setCurrent] = useState(0);
  const totalSlides = eventList.length;

  const [mainBoardApi, setMainBoardApi] = useState<CarouselApi | null>(null);
  const [, setMainBoardCurrent] = useState(0);
  const mainBoardSlides = mainBoard2025Events.length;

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollTo((api.selectedScrollSnap() + 1) % totalSlides);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [api, totalSlides]);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!mainBoardApi) return;

    const interval = setInterval(() => {
      mainBoardApi.scrollTo((mainBoardApi.selectedScrollSnap() + 1) % mainBoardSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [mainBoardApi, mainBoardSlides]);

  useEffect(() => {
    if (!mainBoardApi) return;
    mainBoardApi.on("select", () => {
      setMainBoardCurrent(mainBoardApi.selectedScrollSnap());
    });
  }, [mainBoardApi]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleBoardChange = (board: string) => {
    navigate(`/members?board=${board}`);
  };


  return (
    <div className="flex flex-col min-h-screen h-auto w-full text-gray-900 bg-zinc-950">
      {/* Navbar with Dropdown */}
      <div className="grid-cols-1 bg-zinc-950 border-b-0 border-gray-50 sticky top-0 z-50 gradient-to-r flex justify-between flex-nowrap items-start w-full px-4 md:px-10 py-3 outline">
        <div className="flex items-center gap-2">
          <img src="./logo.png" alt="logo" className="w-10 h-8" />
          <div className="logo text-white text-lg md:text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>CODE CLUB AGPIT</div>
        </div>
        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button 
              onClick={toggleMobileMenu}
              className="text-white p-2"
          >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Desktop Navigation */}
        <div className="nav-links hidden md:flex justify-between items-center w-2/3 md:w-1/2 pr-4 md:pr-40">
          <ul className="flex justify-between items-center w-full text-base md:text-lg lg:text-2xl gap-2 md:gap-6 lg:gap-10">
            <li className="text-white font-semibold cursor-pointer" onClick={() => navigate("/")}>Home</li>
            <li className="text-white font-semibold cursor-pointer" onClick={() => navigate("/about")}>About</li>
            <li className="text-white font-semibold cursor-pointer" onClick={() => navigate("/events")}>Events</li>
            <li className="text-white font-semibold cursor-pointer" onClick={() => navigate("/events/hackathon")}>Hackathon</li>
            <li>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-white font-semibold focus:outline-none">
                        Members
                        <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black border-gray-700 text-white">
                        <DropdownMenuItem 
                            className="cursor-pointer hover:bg-gray-800"
                            onClick={() => navigate("/members?board=SY")}
                        >
                            Main Board 2025-26
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                            className="cursor-pointer hover:bg-gray-800"
                            onClick={() => navigate("/members?board=TY")}
                        >
                            Main Board 2024-25
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                            className="cursor-pointer hover:bg-gray-800"
                            onClick={() => navigate("/members?board=AB")}
                        >
                            Assistant Board Members
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                            className="cursor-pointer hover:bg-gray-800"
                            onClick={() => navigate("/members?board=FY")}
                        >
                            Founder Board Members
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </li>
          </ul>
        </div>
      </div>

        
        {/* Mobile Side Navigation */}
      <div
        className={`fixed top-0 right-0 h-full bg-black w-64 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu} className="text-white">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-6">
          <li
            className="text-white text-lg font-semibold cursor-pointer"
            onClick={() => {
              navigate("/");
              toggleMobileMenu();
            }}
          >
            Home
          </li>
          <li
            className="text-white text-lg font-semibold cursor-pointer"
            onClick={() => {
              navigate("/about");
              toggleMobileMenu();
            }}
          >
            About
          </li>
          <li
            className="text-white text-lg font-semibold cursor-pointer"
            onClick={() => {
              navigate("/events");
              toggleMobileMenu();
            }}
          >
            Events
          </li>
          <li className="text-white text-lg font-semibold cursor-pointer" onClick={() => {navigate("/events/hackathon"); toggleMobileMenu();}}>
            Hackathon
          </li>
          <li className="text-white text-lg font-semibold">
            <div className="flex flex-col space-y-3">
              <span>Members</span>
              <ul className="pl-4 space-y-3">
                <li
                  className="text-gray-300 cursor-pointer hover:text-white"
                  onClick={() => {
                    handleBoardChange("SY");
                    toggleMobileMenu();
                  }}
                >
                  Main Board 2025-26
                </li>
                <li
                  className="text-gray-300 cursor-pointer hover:text-white"
                  onClick={() => {
                    handleBoardChange("TY");
                    toggleMobileMenu();
                  }}
                >
                  Main Board 2024-25
                </li>
                <li
                  className="text-gray-300 cursor-pointer hover:text-white"
                  onClick={() => {
                    handleBoardChange("AB");
                    toggleMobileMenu();
                  }}
                >
                  Assistant Board Members
                </li>
                <li
                  className="text-gray-300 cursor-pointer hover:text-white"
                  onClick={() => {
                    handleBoardChange("FY");
                    toggleMobileMenu();
                  }}
                >
                  Founder Board Members
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

       {/* Overlay when mobile menu is open */}
       {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
 <div className="mt-3 flex w-full ">
        <h1 className="text-2xl md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-zinc-700 via-white to-zinc-700 dark:from-white dark:via-white dark:to-zinc-700 text-center w-full">
          PAST EVENTS
        </h1>
      </div>
      <div className="text-center mt-16 mb-4 font-semibold text-white py-6">
        <p className="text-lg font-extralight">
          (Main Board) : 2025-26
        </p>
      </div>
      <BorderTrailHr />

      <div className="flex gap-30 mb-10 px-0 w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-6 mb-10 px-4 sm:px-6 md:px-10 py-4 w-full max-w-[1200px] mx-auto">
          <Carousel
            setApi={setMainBoardApi}
            opts={{ loop: true, align: 'start', containScroll: 'trimSnaps' }}
            className="w-full max-w-[1000px] md:max-w-[1000px] h-[400px] relative overflow-visible mx-auto"
          >
            <CarouselContent className="w-full">
              {mainBoard2025Events.map((event, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <div className="p-4 h-full">
                    <MorphingDialog transition={FAST_DIALOG_TRANSITION}>
                      <MorphingDialogTrigger
                        style={{ borderRadius: '12px', height: '100%' }}
                        className="text-white bg-zinc-900 h-auto border-zinc-700"
                      >
                        <img
                          src={event.image1}
                          alt={event.name}
                          className="w-full h-[200px] object-cover rounded-md"
                        />
                        <div className="p-3 flex-grow">
                          <MorphingDialogTitle className="text-zinc-100 dark:text-zinc-50 font-semibold">
                            {event.name}
                          </MorphingDialogTitle>
                          <div className="event-card flex-grow font-extralight">
                            <p className="line-clamp-3 text-zinc-300 dark:text-zinc-50">
                              {event.description}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="relative -translate-y-2 ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-400 transition-colors bg-zinc-800 hover:bg-zinc-800 hover:text-zinc-300 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                          aria-label="Open dialog"
                        >
                          <PlusIcon size={12} />
                        </button>
                      </MorphingDialogTrigger>

                      <MorphingDialogContainer>
                        <MorphingDialogContent
                          style={{ borderRadius: '24px' }}
                          className="relative flex flex-col overflow-hidden text-white bg-zinc-900 h-auto border-zinc-700 sm:w-[400px] sm:max-h-[570px]"
                        >
                          <Carousel>
                            <CarouselContent>
                              {[event.image1, event.image2, event.image3].map((img, i) => (
                                <CarouselItem key={i}>
                                  <img
                                    src={img}
                                    alt={`${event.name} image ${i + 1}`}
                                    className="h-80 w-full object-cover"
                                  />
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-md bg-zinc-800 text-zinc-100 hover:text-zinc-100 hover:cursor-pointer hover:bg-zinc-800" />
                            <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-md bg-zinc-800 text-zinc-100 hover:text-zinc-100 hover:cursor-pointer hover:bg-zinc-800" />
                          </Carousel>

                          <div className="p-6">
                            <MorphingDialogTitle className="text-2xl text-zinc-100 dark:text-zinc-50">
                              {event.name}
                            </MorphingDialogTitle>

                            <ScrollArea className="h-[200px] w-full max-w-xs sm:max-w-sm rounded-md border p-4 mx-auto">
                              <MorphingDialogDescription
                                disableLayoutAnimation
                                variants={{
                                  initial: {
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 100,
                                  },
                                  animate: { opacity: 1, scale: 1, y: 0 },
                                  exit: { opacity: 0, scale: 0.8, y: 100 },
                                }}
                              >
                                <p className="mt-2 text-zinc-400 dark:text-zinc-300 text-center">
                                  {event.description}
                                </p>
                              </MorphingDialogDescription>
                            </ScrollArea>
                          </div>
                          <MorphingDialogClose className="text-zinc-50" />
                        </MorphingDialogContent>
                      </MorphingDialogContainer>
                    </MorphingDialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-lg bg-zinc-800 text-zinc-100 hover:text-zinc-100 hover:cursor-pointer hover:bg-zinc-800 transition" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-lg bg-zinc-800 text-zinc-100 hover:text-zinc-100 hover:cursor-pointer hover:bg-zinc-800 transition" />
          </Carousel>
        </div>
      </div>
     
      <div className="text-center mt-16 mb-4 font-semibold text-white py-6">
        <p className="text-lg font-extralight">
          (Main Board) : 2024-25
        </p>
      </div>
      <BorderTrailHr />
      {/* Carousel Section for Past Events */}
      <div className="flex gap-30 mb-10 px-0 w-full max-w-[1200px] mx-auto relative">
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          className="w-full max-w-[1000px] md:max-w-[1000px] h-[400px] relative overflow-visible mx-auto"
        >
          <CarouselContent className="w-full flex-nowrap flex ">
            {eventList.map((event, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 "
              >
                <div className="p-4">
                  <MorphingDialog transition={FAST_DIALOG_TRANSITION}>
                    {/* Clickable Event Card */}
                    <MorphingDialogTrigger
                      style={{ borderRadius: "12px", height: "380px" }}
                      className="text-white bg-zinc-900 h-auto border-zinc-700"
                    >
                      <img
                        src={event.image1}
                        alt={event.name}
                        className="w-full h-[200px] object-cover rounded-md"
                      />
                      <div className="p-3 flex-grow">
                        <MorphingDialogTitle className="text-zinc-200 dark:text-zinc-50 font-semibold">
                          {event.name}
                        </MorphingDialogTitle>
                        <div className="event-card flex-grow font-extralight">
                          <p className="line-clamp-3 text-zinc-300 dark:text-zinc-50 ">
                            {event.detail?.substring(0, 100)}...
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="relative -translate-y-2 ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-900/10 text-zinc-500 hover:text-zinc-400 transition-colors bg-zinc-800 hover:bg-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800  dark:hover:text-zinc-500 dark:focus-visible:ring-zinc-500"
                        aria-label="Open dialog"
                      >
                        <PlusIcon size={12} />
                      </button>
                    </MorphingDialogTrigger>
                    {/* Expanded Dialog Content */}
                    <MorphingDialogContainer>
                      <MorphingDialogContent
                        style={{ borderRadius: "24px" }}
                        className="relative flex flex-col overflow-hidden border border-zinc-950/10  sm:w-[400px] sm:max-h-[570px]"
                      >
                        {/*  New Carousel for Multiple Images */}
                        <Carousel>
                          <CarouselContent>
                            <CarouselItem>
                              <img
                                src={event.image1}
                                alt="Event Image 1"
                                className="h-80 w-full object-cover"
                              />
                            </CarouselItem>
                            <CarouselItem>
                              <img
                                src={event.image2}
                                alt="Event Image 2"
                                className="h-80 w-full object-cover"
                              />
                            </CarouselItem>
                            <CarouselItem>
                              <img
                                src={event.image3}
                                alt="Event Image 3"
                                className="h-80 w-full object-cover"
                              />
                            </CarouselItem>
                          </CarouselContent>
                          <CarouselPrevious className="absolute z-30 left-2 top-1/2 -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-lg bg-zinc-800 text-zinc-100 hover:text-zinc-100 hover:cursor-pointer hover:bg-zinc-800 transition" />
                          <CarouselNext className="absolute z-30 right-2 top-1/2 -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-lg bg-zinc-800 text-zinc-100 hover:text-zinc-100 hover:cursor-pointer hover:bg-zinc-800 transition" />
                        </Carousel>
                        <div className="p-6">
                          <MorphingDialogTitle className="text-2xl text-zinc-100 dark:text-zinc-50 ">
                            {event.name}
                          </MorphingDialogTitle>
                          <ScrollArea className="h-[200px] w-full max-w-xs sm:max-w-sm rounded-md border p-4 mx-auto">
                            <MorphingDialogDescription
                              disableLayoutAnimation
                              variants={{
                                initial: {
                                  opacity: 0,
                                  scale: 0.8,
                                  y: 100,
                                },
                                animate: { opacity: 1, scale: 1, y: 0 },
                                exit: { opacity: 0, scale: 0.8, y: 100 },
                              }}
                            >
                              <p className="mt-2 text-zinc-400 dark:text-zinc-400 text-center">
                                {event.detail}
                              </p>
                            </MorphingDialogDescription>
                          </ScrollArea>
                        </div>
                        <MorphingDialogClose className="text-zinc-50" />
                      </MorphingDialogContent>
                    </MorphingDialogContainer>
                  </MorphingDialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute z-30 left-2 top-1/2 -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-lg bg-zinc-800 text-zinc-100 hover:text-zinc-100 hover:cursor-pointer hover:bg-zinc-800" />
          <CarouselNext className="absolute z-30 right-2 top-1/2 -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-lg bg-zinc-800 text-zinc-100 hover:text-zinc-100 hover:cursor-pointer hover:bg-zinc-800" />
        </Carousel>
      </div>

      

      {/* Add hr line for  main board */}

      <div className="text-center mt-16 mb-4 font-semibold text-white py-6">
        <p className="text-lg font-extralight">
          {activeEvents.activeEvents[2].name1} : {activeEvents.activeEvents[2].year}
        </p>
      </div>
      <BorderTrailHr />

      <div className="flex gap-30 mb-10 px-0 w-full max-w-[1200px] mx-auto">
        {/* Carousel Section */}
        <div className="flex flex-col gap-6 mb-10 px-4 sm:px-6 md:px-10 py-4 w-full max-w-[1200px] mx-auto">
          <Carousel className="w-full max-w-[1000px] md:max-w-[1000px] h-[400px] relative overflow-visible mx-auto ">
            <CarouselContent className="w-full ">
              {eventData.events.map((event, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <div className="p-4 h-full ">
                    <MorphingDialog transition={FAST_DIALOG_TRANSITION}>
                      {/* Trigger */}
                      <MorphingDialogTrigger
                        style={{ borderRadius: "12px", height: "100%" }}
                        className="text-white bg-zinc-900 h-auto border-zinc-700"
                      >
                        <img
                          src={event.image1}
                          alt={event.name}
                          className="w-full h-[200px] object-cover rounded-md"
                        />
                        <div className="p-3 flex-grow">
                          <MorphingDialogTitle className="text-zinc-100 dark:text-zinc-50 font-semibold">
                            {event.name}
                          </MorphingDialogTitle>
                          <div className="event-card flex-grow font-extralight">
                            <p className="line-clamp-3 text-zinc-300 dark:text-zinc-50">
                              {event.description?.substring(0, 100)}...
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="relative -translate-y-2 ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-400 transition-colors bg-zinc-800 hover:bg-zinc-800 hover:text-zinc-300 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                          aria-label="Open dialog"
                        >
                          <PlusIcon size={12} />
                        </button>
                      </MorphingDialogTrigger>

                      {/* Dialog Content */}
                      <MorphingDialogContainer>
                        <MorphingDialogContent
                          style={{ borderRadius: "24px" }}
                          className="relative flex flex-col overflow-hidden text-white bg-zinc-900 h-auto border-zinc-700 sm:w-[400px] sm:max-h-[570px]"
                        >
                          <Carousel>
                            <CarouselContent>
                              {[event.image1, event.image2, event.image3].map(
                                (img, i) => (
                                  <CarouselItem key={i}>
                                    <img
                                      src={img}
                                      alt={`Event Image ${i + 1}`}
                                      className="h-80 w-full object-cover"
                                    />
                                  </CarouselItem>
                                )
                              )}


                            </CarouselContent>
                            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-md bg-zinc-800 text-zinc-100 hover:text-zinc-100 hover:cursor-pointer hover:bg-zinc-800" />
                            <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center aspect-square w-10 h-10 p-0 rounded-full shadow-md bg-zinc-800 text-zinc-100 hover:text-zinc-100 hover:cursor-pointer hover:bg-zinc-800" />
                          </Carousel>

                          <div className="p-6">
                            <MorphingDialogTitle className="text-2xl text-zinc-100 dark:text-zinc-50">
                              {event.name}
                            </MorphingDialogTitle>

                            <ScrollArea className="h-[200px] w-full max-w-xs sm:max-w-sm rounded-md border p-4 mx-auto ">
                              <MorphingDialogDescription
                                disableLayoutAnimation
                                variants={{
                                  initial: {
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 100,
                                  },
                                  animate: { opacity: 1, scale: 1, y: 0 },
                                  exit: { opacity: 0, scale: 0.8, y: 100 },
                                }}
                              >
                                <p className="mt-2 text-zinc-400 dark:text-zinc-300 text-center">
                                  {event.description}
                                </p>
                              </MorphingDialogDescription>
                            </ScrollArea>
                          </div>
                          <MorphingDialogClose className="text-zinc-50" />
                        </MorphingDialogContent>
                      </MorphingDialogContainer>
                    </MorphingDialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

          </Carousel>
        </div>
      </div>
      {/* <div className="flex">
        <p className=" text-white w-full text-center py-4">
          <h1 className="text-2xl md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-zinc-700 via-white to-zinc-700 dark:from-white dark:via-white dark:to-zinc-700 text-center">
            LIVE EVENTS
          </h1>
        </p>
      </div> */}
      {/* <BorderTrailHr /> */}

      <section className="mx-auto mb-16 mt-8 w-full max-w-[1200px] px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-zinc-700 via-white to-zinc-700 dark:from-white dark:via-white dark:to-zinc-700">
            Board Gallery
          </h2>
         
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {boardGallery.map((board) => (
            <article
              key={board.title}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70 shadow-[0_14px_50px_rgba(0,0,0,0.4)]"
            >
              <img
                src={board.image}
                alt={board.title}
                className="h-[320px] w-full object-cover"
              />
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-semibold text-white">{board.title}</h3>
                <p className="text-sm text-zinc-400">{board.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};


export default Events;
