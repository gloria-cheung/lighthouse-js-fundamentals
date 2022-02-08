function smartGarbage (trash, bins) {
  if (trash === "recycling") {
    bins[trash] += 1;
    return bins;
 } else if (trash === "waste") {
    bins[trash] += 1;
    return bins;
 } else if (trash === "compost") {
    bins[trash] += 1;
    return bins;
 } 
}

smartGarbage("recycling", {waste: 4, recycling: 2, compost: 5})