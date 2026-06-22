// Stylized constellation line-art for each home group, drawn on a 64×64 grid.
// Each entry is the *inner* SVG markup (connecting lines + stars); the page wraps
// it in an <svg viewBox="0 0 64 64">. Stars/lines use currentColor so the icon
// takes the group's ink color. These are evocative, not astronomically exact.

function stars(...pts: [number, number][]): string {
  return pts
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.3" fill="currentColor"/>`)
    .join('');
}

function line(points: string): string {
  return `<polyline points="${points}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>`;
}

export const constellations: Record<string, string> = {
  // Orion — shoulders, three-star belt, feet (the hourglass).
  Orion:
    line('16,12 29,33 13,54') +
    line('47,15 39,37 50,50') +
    line('29,33 34,35 39,37') +
    stars([16, 12], [47, 15], [29, 33], [34, 35], [39, 37], [13, 54], [50, 50]),

  // Lyra — Vega plus the little parallelogram of the harp.
  Lyra:
    line('15,13 27,25') +
    line('27,25 45,30 41,49 23,44 27,25') +
    stars([15, 13], [27, 25], [45, 30], [41, 49], [23, 44]),

  // Cygnus — the Northern Cross.
  Cygnus:
    line('32,9 32,57') +
    line('12,30 52,33') +
    stars([32, 9], [32, 37], [32, 57], [12, 30], [52, 33]),

  // Aquila — Altair on a cross-line, head and tail (the eagle).
  Aquila:
    line('32,11 32,33 32,55') +
    line('20,29 32,33 44,37') +
    stars([32, 11], [32, 33], [32, 55], [20, 29], [44, 37]),

  // Perseus — the bent figure with an outstretched arm.
  Perseus:
    line('19,11 29,27 27,45 15,57') +
    line('29,27 47,38') +
    stars([19, 11], [29, 27], [27, 45], [15, 57], [47, 38]),

  // Andromeda — the chain: a rising arc with a small fork.
  Andromeda:
    line('12,46 25,37 38,30 52,17') +
    line('38,30 47,41') +
    stars([12, 46], [25, 37], [38, 30], [52, 17], [47, 41]),

  // Cassiopeia — the W.
  Cassiopeia:
    line('9,19 20,43 32,23 45,45 56,21') +
    stars([9, 19], [20, 43], [32, 23], [45, 45], [56, 21]),

  // Draco — the winding dragon with a small quadrilateral head.
  Draco:
    line('11,55 19,42 15,30 26,23 39,27 47,16') +
    line('47,16 55,13 57,21 49,23 47,16') +
    stars([11, 55], [19, 42], [15, 30], [26, 23], [39, 27], [47, 16], [55, 13], [57, 21], [49, 23]),
};
