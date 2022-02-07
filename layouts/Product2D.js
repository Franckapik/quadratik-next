import dimension from "../../hooks/useDimension";
import React, { useEffect, useRef, useState } from "react";
import { Polygon, Svg, Text } from "react-svg-path";
import { Button, Container } from "react-bootstrap";

export const Product2D = ({ p_selected }) => {
  const canvasRef = useRef(null);

  const snapshot = () => {
    const canvas = canvasRef.current;
    var dataURL = canvas.toDataURL();
  };

  const [cadreLong, setCadreLong] = useState([]);
  const [cadreCourt, setCadreCourt] = useState([]);
  const [peigneCourt, setPeigneCourt] = useState([]);
  const [peigneLong, setPeigneLong] = useState([]);
  const [cellule, setCellule] = useState([]);
  const [cel_width, setCelWidth] = useState(0);
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);

  useEffect(() => {
    const { e, w, p, l, d, j, k, c, c2, n, n2, l2, j2 } = dimension(p_selected);
    setCelWidth(c2);
    setWidth(w);
    setLength(l2);

    let x = 0;
    let y = 0;
    let s = 50; // depart
    let t = d / 4; // espacement entre pieces
    let m = 1; //marge d'assemblage

    if (w && n2) {
      console.log(e, w, p, l, d, j, k, c, c2, n, n2, l2, j2);

      //Cadre long
      const o = [
        [(x = s), (y = s)],
        [(x += d / 3), y],
        [x, (y -= e)],
        [(x += d / 3), y],
        [x, (y += e)],
        [(x += d / 3), y],
        [x, (y += j2)],
        [(x -= d / 3), y],
        [x, (y += e)],
        [(x -= d / 3), y],
        [x, (y -= e)],
        [(x -= d / 3), y],
      ];
      setCadreLong((old) => [...old, ...o]);

      //Cadre court
      const b = [
        [(x = s + d * 1 + t), (y = s - e)],
        [(x += d / 3 - m), y],
        [x, (y += e)],
        [(x += d / 3 + 2 * m), y],
        [x, (y -= e)],
        [(x += d / 3 - m), y],
        [x, (y += w)],
        [(x -= d / 3 - m), y],
        [x, (y -= e)],
        [(x -= d / 3 + 2 * m), y],
        [x, (y += e)],
        [(x -= d / 3 - m), y],
      ];

      setCadreCourt((old) => [...old, ...b]);

      //Peigne Court

      const f = [
        [(x = s + (d + t) * 2), (y = s)],
        [(x += d), y],
      ];

      Array(p - 1)
        .fill("")
        .map((a, i) => {
          f.push([x, (y += c - m)]);
          f.push([(x -= d / 2 + m), y]);
          f.push([x, (y += e + m)]);
          f.push([(x += d / 2 + m), y]);

          return null;
        });

      f.push([x, (y += c)]);
      f.push([(x -= d), y]);

      setPeigneCourt((old) => [...old, ...f]);

      //Peigne Long
      const g = [
        [(x = s + (d + t) * 3), (y = s)],
        [(x += d), y],
      ];

      Array(n2 - 1)
        .fill("")
        .map((a, i) => {
          g.push([x, (y += c - m)]);
          g.push([(x -= d / 2 + m), y]);
          g.push([x, (y += e + m)]);
          g.push([(x += d / 2 + m), y]);

          return null;
        });

      g.push([x, (y += c)]);
      g.push([(x -= d), y]);

      setPeigneLong((old) => [...old, ...g]);

      //Cellule
      const h = [
        [(x = s + (d + t) * 4), (y = s)],
        [(x += c2), y],
        [x, (y += c2)],
        [(x -= c2), y],
      ];
      setCellule((old) => [...old, ...h]);
    }
  }, [p_selected]);

  const containerRef = useRef(null);

  const exportToFile = () => {
    var s = new XMLSerializer();
    var str = s.serializeToString(containerRef.current.children[0]);
    const element = document.createElement("a");
    const file = new Blob([str], { type: "image/svg+xml" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.svg";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    console.log(containerRef.current.children[0]);
  };

  return (
    <Container>
      <div ref={containerRef}>
        {cellule && cellule.length ? (
          <Svg width={1000} height={1000}>
            <Polygon
              points={cadreLong}
              stroke="#0e98dd"
              strokeWidth={1}
              fill="none"
            />
            <Polygon
              points={cadreCourt}
              stroke="#0e98dd"
              strokeWidth={1}
              fill="none"
            />
            <Polygon
              points={peigneCourt}
              stroke="#0e98dd"
              strokeWidth={1}
              fill="none"
            />
            <Polygon
              points={peigneLong}
              stroke="#0e98dd"
              strokeWidth={1}
              fill="none"
            />
            <Polygon
              points={cellule}
              stroke="#0e98dd"
              strokeWidth={1}
              fill="none"
            />
          </Svg>
        ) : null}
      </div>
      <div>
        Dimensions rectifiées : {width} x {length} mm
      </div>
      <div>Cellule : {cel_width.toFixed(4)} mm</div>
      <Button onClick={() => exportToFile()}>Export</Button>
    </Container>
  );
};

/*
	useEffect(() => {
		const ctx = canvas.getContext('2d')
		let x = 0
		let y = 0
		let s = 50 // depart
		let t = d / 4 // espacement entre pieces
		let m = 1 // marge de decoupe

		const wt = 1090
		const hg = 600
		canvas.width = wt
		canvas.height = hg
		/* 		const size = Math.min(wt / (s + (d + t) * 6), hg / (s + l))
		ctx.scale(size, size) 

		if (w && n) {
			// data from useDimension not null
			ctx.beginPath()
			ctx.moveTo((x = s), (y = s))
			ctx.lineTo((x += d / 3), y)
			ctx.lineTo(x, (y -= e))
			ctx.lineTo((x += d / 3), y)
			ctx.lineTo(x, (y += e))
			ctx.lineTo((x += d / 3), y)
			ctx.lineTo(x, (y += j))
			ctx.lineTo((x -= d / 3), y)
			ctx.lineTo(x, (y += e))
			ctx.lineTo((x -= d / 3), y)
			ctx.lineTo(x, (y -= e))
			ctx.lineTo((x -= d / 3), y)
			ctx.closePath()

			//cadre width
			ctx.moveTo((x = s + d * 1 + t), (y = s - e))
			ctx.lineTo((x += d / 3), y)
			ctx.lineTo(x, (y += e))
			ctx.lineTo((x += d / 3), y)
			ctx.lineTo(x, (y -= e))
			ctx.lineTo((x += d / 3), y)
			ctx.lineTo(x, (y += w))
			ctx.lineTo((x -= d / 3), y)
			ctx.lineTo(x, (y -= e))
			ctx.lineTo((x -= d / 3), y)
			ctx.lineTo(x, (y += e))
			ctx.lineTo((x -= d / 3), y)
			ctx.closePath()

			//peigne court
			ctx.moveTo((x = s + (d + t) * 2), (y = s))
			ctx.lineTo((x += d), y)

			Array(p - 1)
				.fill('')
				.map((a, i) => {
					ctx.lineTo(x, (y += c))
					ctx.lineTo((x -= d/2 - 1), y)
					ctx.lineTo(x, (y += e))
					ctx.lineTo((x += d/2 - 1), y)
					return null
				})
			ctx.lineTo(x, (y += c))
			ctx.lineTo((x -= d), y)
			ctx.closePath()

			//peigne long
			ctx.moveTo((x = s + (d + t) * 3), (y = s))
			ctx.lineTo((x += d), y)
			Array(n2 - 1)
				.fill('')
				.map((a, i) => {
					ctx.lineTo(x, (y += c))
					ctx.lineTo((x -= d/2 - 1), y)
					ctx.lineTo(x, (y += e))
					ctx.lineTo((x += d/2 - 1), y)
					return null
				})
			ctx.lineTo(x, (y += c))
			ctx.lineTo((x -= d), y)
			ctx.closePath()

			//cellule
			ctx.moveTo((x = s + (d + t) * 4), (y = s))
			ctx.lineTo((x += c + m), y)
			ctx.lineTo(x, (y += c + m))
			ctx.lineTo((x -= c + m), y)
			ctx.closePath()

			// informations
			const f = 20
			ctx.font = `${f}px serif`
			ctx.strokeText('Dimensions : ' + w + ' x ' + l + ' x ' + d + ' mm', s + d * 5, s + d)
			ctx.strokeText('Cellule : ' + c + ' mm', s + d * 5, s + d + t + f)
			ctx.stroke()
		}
	}, [p_selected, d, c, e, l, p, w, n, n2])*/
