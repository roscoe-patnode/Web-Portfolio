function Introduction() {
  return (
    <>
      <div className="mx-auto lg:w-5xl">
        <div className="py-20">
          <div className="font-lexend-exa text-5xl text-header font-semibold pb-4 pt-8">Roscoe Patnode</div>
          <div className="font-inter pl-5">
            Hello, I'm Roscoe! I graduated from Central Washington University with a Bachelor's Degree in Computer Science with a GPA of 3.78.
            During my studies, I gained a strong foundation of software development principles as well as focused interests in
            <span className="text-highlight font-semibold"> Machine Learning</span>,
            <span className="text-highlight font-semibold"> Database Design</span>, and
            <span className="text-highlight font-semibold"> Data Science</span>. These subjects challenged me and sparked my curiosity and I would like to learn more about these topics.
          </div>
        </div>
        <div className="sm:ml-auto max-w-md pl-10 sm:pl-0">
          <div className="font-familjen text-3xl text-subheader font-semibold">Machine Learning</div>
          <div className="font-inter pl-3">
            I took a Machine Learning class at CWU where I learned about models such a
            <span className="text-highlight font-semibold"> Multi-Layer Perceptron</span> (MLP) and
            <span className="text-highlight font-semibold"> Genetic Algorithms</span> (GA) and worked with a group to program and implement these models.
            I believe that the use of Machine Learning has only begun and the integration of the technology will continue to increase and best practices will evolve with it to ensure ethical execution.
          </div>
        </div>
        <div className="max-w-md pl-10 sm:pl-0">
          <div className="font-familjen text-3xl text-subheader font-semibold">Database Design</div>
          <div className="font-inter pl-3">
            At CWU there was also a Database Design class where I learned the basics of how to create and query a database but also best practices of how a database should be designed.
            But this was only the beginning of my interest in databases because for future projects for other classes I continued to use this knowledge to design databases in both
            <span className="text-highlight font-semibold"> SQL</span> and
            <span className="text-highlight font-semibold"> PostgreSQL</span> including a group project called
            <span className="italic font-semibold text-project"> EventConnect</span> that is described in more detail below.
          </div>
        </div>
        <div className="sm:ml-auto max-w-md pl-10 sm:pl-0">
          <div className="font-familjen text-3xl text-subheader font-semibold">Data Science</div>
          <div className="font-inter pl-3">
            My first experience with data science was with a Data Mining class where I learned how to clean and preprocess large datasets using Python with the
            <span className="text-highlight font-semibold"> NumPy</span> and
            <span className="text-highlight font-semibold"> pandas</span> libraries and then continued with a Computational Statistics class where I learned how to use <span className="text-highlight font-semibold">R</span> along with some statistic principles.
            In this class I worked with a team of about 10 other students to develop an R package that we called
            <span className="italic font-semibold text-project"> Cause and Effect Probability</span> (CEP) that uses C++ to speedup calculations and is discussed further below.
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;