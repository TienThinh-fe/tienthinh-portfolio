import useStore from "../store";

export function WorkItem({
  title,
  image,
  github,
  techStack,
  description,
  live,
}) {
  const theme = useStore((state) => state.theme);

  return (
    <div className="work-item">
      <div className="work-item__preview">
        <div className="work-item__preview--title">{title}</div>
        <div className="work-item__preview--image">
          <img src={image} alt={title} />
        </div>
      </div>
      <div className="work-item__detail">
        <ul>
          {Array.isArray(github) ? (
            github.map((link, index) => (
              <li key={index}>
                <span>Github {index + 1}: </span>
                <span>
                  <a href={link} target="_blank">
                    {link}
                  </a>
                </span>
              </li>
            ))
          ) : (
            <li>
              <span>Github: </span>
              <span>
                <a href={github} target="_blank">
                  {github}
                </a>
              </span>
            </li>
          )}
          <li>
            <span>Tech stack: </span>
            <span>{techStack}</span>
          </li>
          <li>
            <span>Description: </span>
            <span>{description}</span>
          </li>
          {live && (
            <li className={`visit visit__${theme}`}>
              <a href={live} target="_blank">
                Visit
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
