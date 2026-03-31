import { team } from "@/assets/data";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";

const PersonPlaceholder = () => (
  <div className="w-full h-full bg-muted flex items-center justify-center aspect-square">
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-1/2 h-auto text-muted-foreground/30"
    >
      <circle cx="100" cy="70" r="50" fill="currentColor" />
      <ellipse cx="100" cy="220" rx="80" ry="70" fill="currentColor" />
    </svg>
  </div>
);

const Equipe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-28 pb-20 md:pb-32 bg-white">
        <div className="container">
          <header className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {team.title}
            </h1>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </header>

          <div className="flex flex-col gap-16 md:gap-24">
            {team.members.map((member, index) => (
              <div
                key={member.name}
                className={`flex flex-col gap-10 md:gap-16 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-muted rounded-2xl -z-10 transition-transform group-hover:scale-105 duration-500" />
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      {member.placeholder ? (
                        <PersonPlaceholder />
                      ) : (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full object-cover transition-transform duration-700 group-hover:scale-110 aspect-square"
                          loading="lazy"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {member.name}
                  </h2>
                  {member.descriptions.map((desc, i) => {
                    const boldNames = ["Joël", "Stéphanie", "Dominique"];
                    const match = index === 0 ? boldNames.find((n) => desc.startsWith(n)) : undefined;
                    return (
                      <p
                        key={i}
                        className={`font-body text-base md:text-lg text-muted-foreground leading-relaxed md:max-w-xl${i > 0 ? " mt-6" : ""}`}
                      >
                        {match ? (
                          <>
                            <strong>{match}</strong>
                            {desc.slice(match.length)}
                          </>
                        ) : (
                          desc
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Equipe;
