import useStore from "../store";

export function MouseScroll() {
  const theme = useStore((state) => state.theme);

  return (
    <div className={`mouse mouse__${theme}`}>
      <div className="roll"></div>
      <div className="rollshadow"></div>
    </div>
  );
}
