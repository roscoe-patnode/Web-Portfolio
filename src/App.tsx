import Introduction from "./components/Introduction";
import NavigationBar from "./components/NavigationBar";
import ProjectList from "./components/ProjectList";
import CallToAct from "./components/CallToAct";
import Footer from "./components/Footer";

const github = "https://github.com/roscoe-patnode";
const linkedin = "https://www.linkedin.com/in/roscoe-patnode/";
const email = "inquiry@roscoe.dev";
const youtube = "https://www.youtube.com/@RoscoePatnode";
const helpEmail = "help@roscoe.dev";


const projectInfo = [
  {
    title: "Event Connect",
    description:
    <div className="font-inter">
      This web application facilitates communication while host events between the Venue Administrator, Venue Staff, and Event Manager. 
      It allows a Venue Administrator to add information about the Venue including available rooms and layouts for any particular room.
      The Venue Administrator can then invite Venue Staff and Event Managers to the Venue. The Event Managers can create an Event which they can also create tickets for the Venue Staff to fulfill.
      The Venue Staff can see the tickets that are related to their Venue and then update the status of the tickets.
      The app was made by a group composed of me and four other students using
      <span className="text-highlight font-semibold"> Svelte</span>,
      <span className="text-highlight font-semibold"> TypeScript</span>, and a
      <span className="text-highlight font-semibold"> PostgreSQL</span> database using Supabase.
      One of my contributions was designing the database to store information about user accounts, venues, events, and tickets.
      I also made the page for the Venue Admin with the functionality previously mentioned.
    </div>,
    svg:
    <svg className="w-35 h-35 md:place-self-center mx-auto" viewBox="0 0 256 256">
      <path className="fill-highlight" d="M201.8 132.3c-4.1-1-8.5-1.5-12.9-1.5-1.3 0-2.5 0-3.7.1-28.3 1.8-51 24.2-53.3 52.4-.1 1.5-.2 3.1-.2 4.6 0 4.8.6 9.4 1.7 13.8 6.2 24.9 28.7 43.3 55.5 43.3 31.6 0 57.1-25.6 57.1-57.1 0-27.1-18.9-49.8-44.2-55.6zm-12.9 93.4c-20.9 0-37.8-16.9-37.8-37.8s16.9-37.8 37.8-37.8 37.8 16.9 37.8 37.8c-.1 20.9-17 37.8-37.8 37.8zM183.3 217.4c19.4 0 35-15.7 35-35h-35v35zM57.9 54.3c3.6 0 6.5-2.9 6.5-6.5V17.4c0-3.6-2.9-6.5-6.5-6.5h-5.5c-3.6 0-6.5 2.9-6.5 6.5v30.5c0 3.6 2.9 6.5 6.5 6.5l5.5-.1zM159.4 54.3c3.6 0 6.5-2.9 6.5-6.5V17.4c0-3.6-2.9-6.5-6.5-6.5h-5.5c-3.6 0-6.5 2.9-6.5 6.5v30.5c0 3.6 2.9 6.5 6.5 6.5l5.5-.1z"/>
      <path className="fill-subheader" d="M120.1 201.8c-.9-4.5-1.4-9.1-1.4-13.8 0-1.5.1-3.1.2-4.6H37.6c-6.1 0-11.1-5-11.1-11.1V83.8h158.6V118c1.2-.1 2.5-.1 3.7-.1 4.4 0 8.7.4 12.9 1.2V46.9c0-8.1-6.6-14.8-14.8-14.8h-12v15.7c0 8.6-7 15.7-15.7 15.7h-5.5c-8.6 0-15.7-7-15.7-15.7V32.1H73.6v15.7c0 8.6-7 15.7-15.7 15.7h-5.5c-8.6 0-15.7-7-15.7-15.7V32.1H24.8c-8.1 0-14.8 6.6-14.8 14.8V187c0 8.1 6.6 14.8 14.8 14.8h95.3z"/>
      <path className="fill-hover-btnbg" d="M47.4 111.4a14.6 14.6 0 1 0 29.2 0 14.6 14.6 0 1 0-29.2 0zM91.3 111.4a14.6 14.6 0 1 0 29.2 0 14.6 14.6 0 1 0-29.2 0zM135.2 111.4a14.6 14.6 0 1 0 29.2 0 14.6 14.6 0 1 0-29.2 0zM91.3 155.7a14.6 14.6 0 1 0 29.2 0 14.6 14.6 0 1 0-29.2 0zM47.4 155.7a14.6 14.6 0 1 0 29.2 0 14.6 14.6 0 1 0-29.2 0z"/>
    </svg>,
    link: "https://github.com/roscoe-patnode/EventConnect"
  },
  {
    title: "CEP (R Package)",
    description: 
    <div className="font-inter">
      The purpose of this R Package is to optize the calculation of the Cause and Effect Probability (CEP) on any given dataframe using Maximum Likelihood Estimation (MLE) by using
      <span className="text-highlight font-semibold"> C++</span> and
      <span className="text-highlight font-semibold"> CUDA</span>.
      This package had some previous work done by a group of 5 students and also a group of international students which was then finished by a group of me and about 10 other students.
      I was tasked with cleaning up the work done by previous teams which included renaming variables and functions as well as deleting unused function and refactoring spurious code.
      I also helped with the C++ multithreading in order to make the application run faster and then benchmark the amount of speedup.
      The optimizations made to the C++ resulted in over 70% improvement in the time it takes to get the final calculations.
    </div>,
    svg:
    <svg viewBox="0 0 108.24 122.88" className="w-35 h-40 md:place-self-center mx-auto">
      <path fill="none" fillRule="evenodd" d="M43.64 87.45c-.46.2-.92.41-1.38.6.75 5.39 1.72 10.28 2.87 14.51 2.6 9.58 5.8 15.51 9 15.51 3.19 0 6.4-5.93 8.99-15.51 1.14-4.23 2.11-9.13 2.86-14.51-.46-.19-.92-.39-1.37-.59a27.897 27.897 0 0 1-10.48 2.03c-3.71 0-7.25-.72-10.49-2.04zM54.12 37.41c-13.27 0-24.03 10.76-24.03 24.03 0 13.27 10.76 24.03 24.03 24.03 13.27 0 24.03-10.76 24.03-24.03 0-13.27-10.76-24.03-24.03-24.03zm0 7.79c7.06 0 12.79 2.68 12.79 5.98 0 3.31-5.73 5.98-12.79 5.98-7.06 0-12.79-2.68-12.79-5.98 0-3.3 5.73-5.98 12.79-5.98zm-12.85 8.86c1.8 7.57 24.58 7.5 25.71.07v4.48c-.83 6.77-23.43 7.83-25.71-.06zm0 6.61c1.8 7.75 24.58 7.67 25.71.06v4.59c-.83 6.93-23.43 8.02-25.71-.06zM97.193 31.137c-3.083.02-7.167.702-11.972 1.972-4.24 1.12-8.96 2.722-13.99 4.772.05.47.11.969.16 1.459.9.7 1.758 1.46 2.558 2.27A28.004 28.004 0 0 1 81.9 57.56c.4.29.8.58 1.19.88 4.29-3.34 8.04-6.63 11.13-9.74 7-7.05 10.53-12.79 8.94-15.56-.8-1.38-2.883-2.023-5.967-2.003zM11.047 31.127c-3.084-.02-5.167.624-5.967 2.004C3.47 35.9 7 41.639 14.01 48.689c3.09 3.11 6.84 6.4 11.13 9.74.4-.3.8-.59 1.21-.89a27.945 27.945 0 0 1 7.95-15.93l.24-.218c.73-.71 1.5-1.392 2.3-2.022.05-.5.11-1 .17-1.5-5.04-2.04-9.75-3.64-13.99-4.77-4.805-1.27-8.89-1.952-11.973-1.972z" clipRule="evenodd"/>
      <path className="fill-hover-btnbg" fillRule="evenodd" d="M22.35 85.8a6.652 6.652 0 0 0-6.65 6.65c0 3.67 2.98 6.65 6.65 6.65 3.67 0 6.65-2.98 6.65-6.65 0-3.67-2.98-6.65-6.65-6.65z M43.15 11.76c-3.67 0-6.65 2.98-6.65 6.65 0 3.67 2.98 6.65 6.65 6.65 3.67 0 6.65-2.98 6.65-6.65 0-3.67-2.98-6.65-6.65-6.65zM97.8 66.75c-3.68 0-6.65 2.98-6.65 6.65 0 3.67 2.98 6.65 6.65 6.65 3.67 0 6.65-2.98 6.65-6.65 0-3.67-2.98-6.65-6.65-6.65z" clipRule="evenodd"/>
      <path className="fill-highlight" fillRule="evenodd" d="M66.91 67.23c-1.12 7.61-23.78 8.16-25.58.41v4.59c2.28 8.08 24.75 6.52 25.58-.41zM41.27 60.67v4.59c2.28 8.08 24.88 6.99 25.71.06v-4.59c-1.13 7.61-23.91 7.69-25.71-.06zM41.27 54.06v4.49c2.28 7.89 24.88 6.83 25.71.06v-4.48c-1.13 7.43-23.91 7.5-25.71-.07zM54.12 45.2c-7.06 0-12.79 2.68-12.79 5.98 0 3.3 5.73 5.98 12.79 5.98 7.06 0 12.79-2.67 12.79-5.98 0-3.3-5.73-5.98-12.79-5.98z" clipRule="evenodd"/>
      <path className="fill-subheader" fillRule="evenodd" d="M54.12 0c-3.63 0-6.9 2.99-9.63 8.26 1.62.21 3.11.8 4.4 1.67 1.67-3.26 3.45-5.09 5.22-5.09 3.19 0 6.39 5.93 8.99 15.51 1.15 4.23 2.12 9.12 2.87 14.51-.44.19-.89.38-1.33.58a28.137 28.137 0 0 0-10.53-2.04c-3.72 0-7.27.73-10.52 2.05-.45-.2-.89-.4-1.34-.59.3-2.14.63-4.21 1-6.18h-.09c-1.66 0-3.22-.39-4.61-1.09-.32 1.72-.62 3.51-.89 5.36-4.81-1.91-9.33-3.42-13.42-4.5-11.8-3.12-20.5-2.6-23.33 2.29C-1.91 35.63 2 43.43 10.6 52.08c2.99 3 6.56 6.16 10.61 9.37-4.06 3.21-7.62 6.37-10.61 9.37C2 79.47-1.91 87.27.91 92.17c1.8 3.12 5.99 4.46 11.86 4.2a10.356 10.356 0 0 1-.65-4.63c-3.68.19-6.16-.43-7.05-1.97C3.47 87 7 81.26 14.02 74.18c3.09-3.11 6.84-6.4 11.13-9.74.39.29.79.59 1.19.88a27.97 27.97 0 0 0 7.95 15.94l.02.02c.8.8 1.65 1.55 2.54 2.25.06.5.11 1 .17 1.49-2.04.83-4.02 1.58-5.94 2.26.83 1.35 1.36 2.9 1.49 4.57 1.65-.58 3.35-1.22 5.09-1.91.75 5.11 1.7 9.78 2.81 13.87 3.2 11.78 8 19.07 13.65 19.07s10.45-7.29 13.65-19.07c1.11-4.09 2.06-8.76 2.81-13.87 4.81 1.9 9.33 3.42 13.42 4.5 11.8 3.12 20.5 2.6 23.32-2.3 1.74-3.01.93-7.12-1.96-11.85a10.425 10.425 0 0 1-3.75 2.78c1.79 2.9 2.39 5.21 1.54 6.68-1.6 2.76-8.33 2.57-17.94.03-4.24-1.12-8.96-2.72-13.99-4.76.06-.5.12-1 .17-1.5.81-.63 1.58-1.31 2.32-2.03l.24-.22a27.972 27.972 0 0 0 7.95-15.94c.4-.3.8-.59 1.19-.88 1.9 1.49 3.7 2.96 5.38 4.41.76-1.44 1.85-2.67 3.18-3.6-1.46-1.26-3.01-2.54-4.63-3.82 4.06-3.21 7.63-6.37 10.61-9.37 8.6-8.65 12.51-16.45 9.69-21.34-2.83-4.89-11.54-5.41-23.33-2.29-4.09 1.09-8.61 2.6-13.41 4.5-.75-5.11-1.7-9.78-2.81-13.87C64.57 7.29 59.77 0 54.12 0ZM11.046 31.127c3.084.02 7.168.703 11.973 1.973 4.24 1.13 8.95 2.73 13.99 4.77-.06.5-.12 1-.17 1.5-.8.63-1.57 1.31-2.3 2.02l-.24.22a27.945 27.945 0 0 0-7.95 15.93c-.41.3-.81.59-1.21.89-4.29-3.34-8.04-6.63-11.13-9.74C7 41.64 3.47 35.9 5.08 33.13c.8-1.38 2.883-2.023 5.967-2.003zm86.146.01c3.084-.02 5.167.624 5.967 2.004 1.59 2.77-1.94 8.508-8.94 15.558-3.09 3.11-6.84 6.4-11.13 9.74-.39-.3-.79-.588-1.19-.878a28.004 28.004 0 0 0-7.95-15.952c-.8-.81-1.66-1.57-2.56-2.27-.05-.49-.11-.988-.16-1.458 5.03-2.05 9.75-3.652 13.99-4.772 4.806-1.27 8.89-1.952 11.973-1.972zM54.12 37.41c13.27 0 24.031 10.76 24.031 24.03 0 13.27-10.76 24.03-24.03 24.03-13.27 0-24.03-10.76-24.03-24.03 0-13.27 10.76-24.03 24.03-24.03zM43.641 87.45a27.732 27.732 0 0 0 10.49 2.04c3.7 0 7.238-.72 10.478-2.03.45.2.911.4 1.371.59-.75 5.38-1.72 10.28-2.86 14.51-2.59 9.58-5.8 15.51-8.99 15.51-3.2 0-6.4-5.93-9-15.51-1.15-4.23-2.12-9.12-2.87-14.51.46-.19.92-.4 1.38-.6z" clipRule="evenodd"/>
    </svg>,
    link: "disabled"
  },
  {
    title: "Portfolio Website",
    description:
    <div className="font-inter">
      I developed this Portfolio Website using 
      <span className="text-highlight font-semibold"> React</span>,
      <span className="text-highlight font-semibold"> Tailwind</span>,
      and 
      <span className="text-highlight font-semibold"> Node.js</span>. 
      I am hosting it using services through
      <span className="text-highlight font-semibold"> AWS</span> such as
      <span className="italic font-semibold"> Amplify</span> and
      <span className="italic font-semibold"> Route53</span> for HTTPS certification.
      I chose to use Amplify since it can automatically deploy when a change is pushed to a branch on GitHub.
      With Amplify I can also create a
      <span className="italic font-semibold"> DynamoDB</span> database to store messages sent through the website which uses GraphQL to handle the API requests.
      I also used <span className="text-highlight font-semibold"> GitHub</span> to track versions and milestones to orgranize development.
      Some future features I plan on adding include various animations, an AI assistant, a separate web page for resume, and button popouts with detailed project information.
    </div>,
    svg:
    <svg className="w-35 h-35 md:place-self-center mx-auto" viewBox="0 0 64 64">
      <path className="fill-hover-navbg" fillRule="evenodd" d="M10 9h49v6H10z"/>
      <path className="fill-pagebg-ter" d="M10 15h49v40H10z"/>
      <path className="fill-pagebg-sec" fillRule="evenodd" d="M10 15v40h29.77a28.484 41.393 35.6 0 0 18.625-40z"/>
      <path className="fill-subheader" fillRule="evenodd" d="M12 8c-1.645 0-3 1.355-3 3v40a1 1 0 1 0 2 0V11c0-.564.436-1 1-1h45c.564 0 1 .436 1 1v3H16a1 1 0 0 0 0 2h42v37c0 .564-.436 1-1 1H8a1 1 0 0 0 0 2h49c1.645 0 3-1.355 3-3V11c0-1.645-1.355-3-3-3z" color="#000"/>
      <path className="fill-hover-main" fillRule="evenodd" d="M339 299a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" color="#000" transform="translate(-288 -288)"/>
      <path className="fill-hover-main" fillRule="evenodd" d="M343 299a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" color="#000" transform="translate(-288 -288)"/>
      <path className="fill-hover-main" fillRule="evenodd" d="M335 299a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" color="#000" transform="translate(-288 -288)"/>
      <path className="fill-hover-btnbg" fillRule="evenodd" d="M293 342a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z" color="#000" transform="translate(-288 -288)"/>
      <path className="stroke-hover-main stroke-[.75] fill-pagebg-ter" fillRule="evenodd" d="M301 299a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" color="#000" transform="translate(-288 -288)"/>
      <path className="fill-hover-main" fillRule="evenodd" d="M31 19.068a1 1 0 0 0-1 1v28.864a1 1 0 0 0 1 1 1 1 0 0 0 1-1V20.068a1 1 0 0 0-1-1z" color="#000"/>
      <path className="fill-hover-main" fillRule="evenodd" d="M22 38a1 1 0 0 0-1 1 1 1 0 0 0 1 1h5a1 1 0 0 0 1-1 1 1 0 0 0-1-1z" color="#000"/>
      <path className="fill-hover-main" fillRule="evenodd" d="M15 38a1 1 0 0 0-1 1 1 1 0 0 0 1 1h3a1 1 0 0 0 1-1 1 1 0 0 0-1-1z" color="#000"/>
      <path className="fill-hover-main" fillRule="evenodd" d="M15 44a1 1 0 0 0-1 1 1 1 0 0 0 1 1h12a1 1 0 0 0 1-1 1 1 0 0 0-1-1z" color="#000"/>
      <path className="fill-highlight" fillRule="evenodd" d="M44 21a1 1 0 0 0-1 1 1 1 0 0 0 1 1h9a1 1 0 0 0 1-1 1 1 0 0 0-1-1z" color="#000"/>
      <path className="fill-hover-btnbg" fillRule="evenodd" d="M324 309a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" color="#000" transform="translate(-288 -288)"/>
      <path className="fill-highlight" fillRule="evenodd" d="M44 37a1 1 0 0 0-1 1 1 1 0 0 0 1 1h9a1 1 0 0 0 1-1 1 1 0 0 0-1-1z" color="#000"/>
      <path className="fill-hover-btnbg" fillRule="evenodd" d="M324 325a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" color="#000" transform="translate(-288 -288)"/>
      <path className="fill-hover-main" fillRule="evenodd" d="M36 29a1 1 0 0 0-1 1 1 1 0 0 0 1 1h17a1 1 0 0 0 1-1 1 1 0 0 0-1-1z" color="#000"/>
      <path className="fill-hover-main" fillRule="evenodd" d="M324 334a1 1 0 0 0-1 1 1 1 0 0 0 1 1h17a1 1 0 0 0 1-1 1 1 0 0 0-1-1z" color="#000" transform="translate(-288 -288)"/>
      <path className="fill-subheader" d="M24 24a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z"/>
      <path className="fill-subheader" d="M16 33c0-3.314 2.239-6 5-6s5 2.686 5 6z"/>
      <path className="fill-highlight" fillRule="evenodd" d="M19.826 21.244A3 3 0 0 0 18 24a3 3 0 0 0 3 3 3 3 0 0 0 .686-.08 5.76 9.653 0 0 0-1.86-5.676z"/>
      <path className="fill-highlight" d="M21 27c-2.761 0-5 2.686-5 6h5.072a5.76 9.653 0 0 0 .688-4.543 5.76 9.653 0 0 0-.06-1.398A4.214 4.214 0 0 0 21 27Z"/>
      <path className="fill-hover-main" fillRule="evenodd" d="M21 20c-2.197 0-4 1.803-4 4 0 1.097.449 2.095 1.172 2.82C16.257 28.015 15 30.38 15 33a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-2.836c.392-2.324 1.989-4 3.836-4 1.847 0 3.444 1.676 3.836 4H24a1 1 0 0 0-1 1 1 1 0 0 0 1 1h2a1 1 0 0 0 1-1c0-2.621-1.257-4.985-3.172-6.18A3.988 3.988 0 0 0 25 24c0-2.197-1.803-4-4-4zm0 2c1.116 0 2 .884 2 2s-.884 2-2 2-2-.884-2-2 .884-2 2-2z" color="#000"/>
    </svg>,
    link: "https://github.com/roscoe-patnode/Web-Portfolio"
  },
  {
    title: "OasisLedger",
    description:
    <div className="font-inter">
      My main motivation with this project was to be able to efficiently keep track of my personal finances without having trusting any third parties with my financial information.
      To improve on tracking finances with a spreadsheet, I used the Python library <span className="text-highlight font-semibold">pandas</span> to parse financial statements and then store the data in a <span className="text-highlight font-semibold">PostgreSQL</span> database, which I use to summarize the status of the accounts and generate interactive graphs with <span className="text-highlight font-semibold">plotly</span>.
      In order to prioritize privacy I store the database using <span className="text-highlight font-semibold">TrueNAS</span> on a computer I got from a surplus warehouse sale at CWU and query the database.
      For the UI I used <span className="text-highlight font-semibold">Flask</span> that routes HTTP requests, <span className="text-highlight font-semibold">Jinja</span> which allows dynamically render HTML from templates, and <span className="text-highlight font-semibold">Bootstrap</span> handling the styling. I chose these so I could familiarize myself with alternatives to what I have used before in other web app projects.
    </div>,
    svg:
    <svg className="w-35 h-35 md:place-self-center mx-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 32 32">
      <rect x="6" y="3" width="21" height="25" className="fill-hover-btnbg" />
      <path className="fill-project" d="M12 8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Z"/>
      <path className="fill-subheader" d="M4 3a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2v25a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.26A3.247 3.247 0 0 1 2.5 22c0-1.078.525-2.034 1.333-2.625A3.246 3.246 0 0 1 2.5 16.75c0-1.078.525-2.034 1.333-2.625A3.246 3.246 0 0 1 2.5 11.5c0-1.078.525-2.034 1.333-2.625A3.246 3.246 0 0 1 2.5 6.25A3.25 3.25 0 0 1 4 3.51V3Zm2 17.268V25h21V3H6v.01c.223.016.44.056.649.116c.202-.025.545.137.91.424A3.248 3.248 0 0 1 8.99 6H9a.75.75 0 0 1-1.5 0h-.018A1.751 1.751 0 0 0 6 4.518v3.741c.223.017.44.057.649.117c.202-.025.545.137.91.424a3.248 3.248 0 0 1 1.432 2.45H9a.75.75 0 0 1-1.5 0h-.018A1.751 1.751 0 0 0 6 9.768v3.741c.223.018.44.057.649.117c.202-.024.545.136.91.424A3.248 3.248 0 0 1 8.99 16.5H9a.75.75 0 0 1-1.5 0h-.018A1.751 1.751 0 0 0 6 15.018v3.741c.223.017.44.057.649.117c.202-.024.545.136.91.423A3.248 3.248 0 0 1 8.99 21.75H9a.75.75 0 0 1-1.5 0h-.018A1.751 1.751 0 0 0 6 20.268ZM6 27v1h21v-1H6Z"/>
    </svg>,
    link: "disabled"
  }
];

function App() {
  return (
    <>
      <NavigationBar 
        github={github}
        linkedin={linkedin}
        email={email}
      />
      <Introduction/>
      <ProjectList projectInfo={projectInfo}/>
      <CallToAct helpEmail={helpEmail}/>
      <Footer 
        github={github}
        linkedin={linkedin}
        email={email}
        youtube={youtube}
      />
    </>
  );
}

export default App;