const Header = () => {
  return (
    <header className="gap-4">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-[#878EB2] font-extrabold text-[56px]">2025</h1>
        <h2 className="text-[#878EB2] font-bold text-[20px]">
          This planner belongs to:
        </h2>
        <h2 className="text-[#878EB2] font-bold text-[20px]">
          Ayyana Noviyarti
        </h2>
      </div>
      <div className="border-b-[3px] w-[400px] border-[#878EB2] h-[23px]"></div>
    </header>
  );
}

export default Header