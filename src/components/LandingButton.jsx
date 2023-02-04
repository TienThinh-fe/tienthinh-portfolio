import useStore from "../store";

export function LandingButton({ name, handleClick }) {
  const theme = useStore((state) => state.theme);

  return (
    <div className={`landing--button landing--button__${theme}`}>
      <span onClick={handleClick}>{name}</span>
    </div>
  );
}
