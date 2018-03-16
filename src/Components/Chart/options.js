export const options = {
  fullWidth: true,
  chartPadding: {
    left: -5,
    bottom: -15
  },
  axisX: {
    showGrid: false
  },
  axisY: {
    showGrid: false,
    onlyInteger: true,
    labelInterpolationFnc: value => `${value} ºC`
  },
  series: {
    upper: {
      showPoint: false
    },
    lower: {
      showPoint: false
    },
    live: {}
  }
}
