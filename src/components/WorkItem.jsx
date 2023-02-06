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
          <li>Github: {github}</li>
          <li>Tech stack: {techStack}</li>
          <li>Description: {description}</li>
          <li className={`visit visit__${theme}`}>Visit</li>
        </ul>
      </div>
    </div>
  );
}
