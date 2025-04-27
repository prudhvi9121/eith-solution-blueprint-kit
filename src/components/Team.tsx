
const Team = () => {
  const team = [
    {
      id: 1,
      name: "Sarah Parker",
      role: "CEO & Founder",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Sam Miller",
      role: "CTO",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "John Winters",
      role: "Design Lead",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Christine Roy",
      role: "Marketing Director",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 5,
      name: "Mark Taylor",
      role: "Lead Developer",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 6,
      name: "Daniel Morris",
      role: "Project Manager",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="team" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          We're our own
          <br />
          <span className="underline decoration-4 underline-offset-8">Biggest Investors</span>.
        </h2>
        
        <p className="max-w-2xl text-lg mb-12">
          Our team has invested thousands of hours into mastering our craft. We're passionate experts who bring deep industry knowledge and technical skill to every project we undertake.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col items-start">
              <div className="w-full aspect-square bg-gray-100 mb-4"></div>
              <h3 className="text-lg font-display font-bold">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{member.role}</p>
              <div className="flex space-x-2">
                <a href={member.social.twitter} aria-label="Twitter" className="text-gray-700 hover:text-black">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4.01001C21 4.50001 20.02 4.87001 19 5.09001C17.879 3.87501 16.119 3.80001 14.95 4.91001C13.78 6.02001 13.34 7.77001 13.89 9.32001C10.21 9.16001 6.93 7.55001 4.5 4.67001C4 5.57001 3.83 6.62001 4.05 7.62001C4.26 8.62001 4.85 9.49001 5.66 10.0087C5.01 9.99001 4.37 9.81001 3.8 9.48001V9.54001C3.8 11.6487 5.22 13.4487 7.2 13.9C6.6 14.07 5.97 14.0987 5.36 14.0C5.63 14.893 6.17 15.674 6.91 16.236C7.65 16.798 8.55 17.114 9.48 17.1387C7.67754 18.7257 5.3968 19.5597 3 19.5887C2.67 19.5887 2.34 19.5687 2 19.5287C4.44 21.1628 7.28 22.0207 10.17 22.0187" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href={member.social.linkedin} aria-label="LinkedIn" className="text-gray-700 hover:text-black">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8ZM6 9H2V21H6V9ZM4 6C4.53043 6 5.03914 5.78929 5.41421 5.41421C5.78929 5.03914 6 4.53043 6 4C6 3.46957 5.78929 2.96086 5.41421 2.58579C5.03914 2.21071 4.53043 2 4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4C2 4.53043 2.21071 5.03914 2.58579 5.41421C2.96086 5.78929 3.46957 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
