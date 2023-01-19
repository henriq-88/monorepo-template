interface BackgroundProps {
  fromGradientClassName: string;
  toGradientClassName: string;
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = (props) => {
  return (
    <main className="flex h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {props.children}
    </main>
  );
};

export default Background;
