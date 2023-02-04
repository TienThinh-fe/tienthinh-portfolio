import useStore from "../store";

export function LandingButton({ name }) {
  const theme = useStore((state) => state.theme);

  return (
    <div className={`landing--button landing--button__${theme}`}>
      <span>{name}</span>
    </div>
  );
}
