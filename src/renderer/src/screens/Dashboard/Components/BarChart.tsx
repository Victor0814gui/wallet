import React, { useRef, useEffect } from "react";

const BarChart = ({ data, width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    // Limpa o canvas
    ctx.clearRect(0, 0, width, height);

    // Define as dimensões e espaçamentos das barras
    const barWidth = width / data.length;
    const maxDataValue = Math.max(...data);
    const scale = height / maxDataValue;

    data.forEach((value, index) => {
      const barHeight = value * scale;
      const x = index * barWidth;
      const y = height - barHeight;

      // Desenha a barra
      ctx.fillStyle = "blue";
      ctx.fillRect(x, y, barWidth, barHeight);
    });
  }, [data, width, height]);

  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};

export default BarChart;
