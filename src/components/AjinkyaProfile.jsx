import { StarIcon } from "@heroicons/react/24/solid";
const profileImage = "https://cdn.devdojo.com/users/August2022/ajinkya0011.jpg";

/** Instructor card: identity, rating, stats, bio and accomplishments. */
const AjinkyaProfile = () => {
  const profileData = {
    name: "Ajinkya Bhilare",
    rating: 4.5,
    reviews: 109,
    students: "15,000+",
    courses: 14,
    bio: "Ajinkya is an esteemed Indian instructor renowned for teaching over 15,000 students worldwide...",
    accomplishments: [
      "Founded LearnToProgram Media",
      "Operates an internet video network",
      "Speaks at prestigious events like TechWeek NY, TechWeek LA, and SXSW",
    ],
  };

  const stats = [
    { label: "Reviews", value: profileData.reviews },
    { label: "Students", value: profileData.students.toLocaleString("en-IN") },
    { label: "Courses", value: profileData.courses },
  ];

  return (
    <div className="card">
      <div className="flex items-center gap-4">
        <img
          src={profileImage}
          alt=""
          className="h-16 w-16 rounded-full object-cover ring-2 ring-accent/50"
        />
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-ink-subtle">Your instructor</p>
          <h2 className="text-xl font-bold text-ink">{profileData.name}</h2>
          <p className="mt-0.5 flex items-center gap-1 text-sm text-ink-muted">
            <StarIcon className="h-4 w-4 text-warn" aria-hidden />
            <span className="font-semibold text-ink">{profileData.rating}</span> instructor rating
          </p>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-2">
        {stats.map(({ label, value }) => (
          <div key={label} className="tile px-2 text-center">
            <dd className="text-lg font-bold tabular-nums text-ink">{value}</dd>
            <dt className="text-xs text-ink-subtle">{label}</dt>
          </div>
        ))}
      </dl>

      <p className="mt-5 text-sm leading-6 text-ink-muted">{profileData.bio}</p>

      <h3 className="mt-5 text-sm font-semibold text-ink">Accomplishments</h3>
      <ul className="mt-2 space-y-1.5">
        {profileData.accomplishments.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-ink-muted">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AjinkyaProfile;
