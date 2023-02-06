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
          <li>
            <span>Github: </span>
            <span>{github}</span>
          </li>
          <li>
            <span>Tech stack: </span>
            <span>{techStack}</span>
          </li>
          <li>
            <span>Description: </span>
            <span>{description}</span>
          </li>
          <li className={`visit visit__${theme}`}>Visit</li>
        </ul>
      </div>
    </div>
  );
}
