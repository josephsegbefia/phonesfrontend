import React from "react";

const Footer = () => {
  return (
    <section className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">
      <p className="max-w-xl font-light text">
        © 2023 Joseph Segbefia | Software Engineer | Data Scientist | Marine
        Engineer
      </p>

      <p className="max-w-xl font-light text">
        <a
          href="https://github.com/josephsegbefia/phonesfrontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Front End GitHub
        </a>
      </p>
      <p className="max-w-xl font-light text">
        <a
          href="https://github.com/josephsegbefia/phonecave"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back End GitHub
        </a>
      </p>
      <p className="max-w-xl font-light text">❤️</p>
    </section>
  );
};

export default Footer;
