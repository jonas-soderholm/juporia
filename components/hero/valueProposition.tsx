export function ValueProposition() {
  return (
    <>
      {/* Why XhaleGuard? */}
      <div className="flex flex-col md:flex-row mt-32 items-center gap-4 px-4 md:max-w-[60%] mx-auto text-center">
        <div className="md:mr-4 flex-shrink-0 w-24 h-24 md:w-40 md:h-40 flex items-center justify-center">
          <img
            src="./logo.svg"
            alt="XhaleGuard Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why XhaleGuard?
          </h2>
          <div className="text-base max-w-full md:max-w-md mx-auto">
            <p>
              Our easy-to-learn courses cover essential cybersecurity practices,
              giving your team a solid foundation—even if they have no prior
              experience. Making sure everyone in the team is on the same page.
            </p>
          </div>
        </div>
      </div>

      {/* Why Not Framework? */}
      <div className="flex flex-col md:flex-row-reverse mt-32 items-center gap-4 px-4 md:max-w-[60%] mx-auto text-center">
        <div className="md:ml-4 flex-shrink-0 w-24 h-24 md:w-40 md:h-40 flex items-center justify-center">
          <img
            src="./logo.svg"
            alt="XhaleGuard Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col max-w-full md:max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Security Frameworks?
          </h2>
          <div className="text-base">
            <p>
              Complex security frameworks like CIS 18, NIST, and ISO 27000 are
              designed for larger organizations with dedicated security teams,
              making them costly and out of reach for many small to medium
              businesses. We bridge that gap and will also teach you more about
              these frameworks in the course.
            </p>
          </div>
        </div>
      </div>

      {/* Is it that important? */}
      <div className="flex flex-col md:flex-row mt-32 items-center gap-4 px-4 md:max-w-[60%] mx-auto text-center">
        <div className="md:mr-4 flex-shrink-0 w-24 h-24 md:w-40 md:h-40 flex items-center justify-center">
          <img
            src="./logo.svg"
            alt="XhaleGuard Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How important is security today?
          </h2>
          <div className="text-base max-w-full md:max-w-md mx-auto">
            <p>
              Our easy-to-learn courses cover essential cybersecurity practices,
              giving your team a solid foundation—even if they have no prior
              experience. Making sure everyone in the team is on the same page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
