import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fechRepos() {
  const response = await fetch("https://api.github.com/users/Rojahm/repos");
  //wait 3 sec to load so loader can be seen!
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const repos = await response.json();
  return repos;
}
const ReposPage = async () => {
  const repos = await fechRepos();
  return (
    <div className="repos-container">
      <h1>repospage</h1>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
