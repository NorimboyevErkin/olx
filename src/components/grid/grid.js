function Grid({ children, minmax = "300px" ,gap = "16px" , ...others}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${minmax}, 1fr))`,
        gap: gap,
      }}
      {...others}
    >
      {children}
    </div>
  );
}

export default Grid;
