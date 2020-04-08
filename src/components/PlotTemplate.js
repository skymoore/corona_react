import Plotly from 'plotly.js';
import axios from 'axios';


function Plot(props) {
    console.log('plotprops',props)
    const data = [{
        "hovertemplate": "x=%{x}<br>y=%{y}<extra></extra>",
        "legendgroup": "",
        "line":
        {
            "color": "#636efa",
            "dash": "solid"
        },
        "mode": "lines",
        "name": props.data.name,
        "showlegend": false,
        "type": props.data.type,
        "x": props.data.x,
        "xaxis": props.data.xaxis,
        "y": props.data.y,
        "yaxis": props.data.yaxis
    }]
    const layout = {
        "legend":
        {
            "tracegroupgap": 0
        },
        "margin":
        {
            "t": 60
        },
        "template":
        {
            "data": { "bar": [{ "error_x": { "color": "#f2f5fa" }, "error_y": { "color": "#f2f5fa" }, "marker": { "line": { "color": "rgb(17,17,17)", "width": 0.5 } }, "type": "bar" }], "barpolar": [{ "marker": { "line": { "color": "rgb(17,17,17)", "width": 0.5 } }, "type": "barpolar" }], "carpet": [{ "aaxis": { "endlinecolor": "#A2B1C6", "gridcolor": "#506784", "linecolor": "#506784", "minorgridcolor": "#506784", "startlinecolor": "#A2B1C6" }, "baxis": { "endlinecolor": "#A2B1C6", "gridcolor": "#506784", "linecolor": "#506784", "minorgridcolor": "#506784", "startlinecolor": "#A2B1C6" }, "type": "carpet" }], "choropleth": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "type": "choropleth" }], "contour": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1, "#f0f921"]], "type": "contour" }], "contourcarpet": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "type": "contourcarpet" }], "heatmap": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1, "#f0f921"]], "type": "heatmap" }], "heatmapgl": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1, "#f0f921"]], "type": "heatmapgl" }], "histogram": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "histogram" }], "histogram2d": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1, "#f0f921"]], "type": "histogram2d" }], "histogram2dcontour": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1, "#f0f921"]], "type": "histogram2dcontour" }], "mesh3d": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "type": "mesh3d" }], "parcoords": [{ "line": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "parcoords" }], "pie": [{ "automargin": true, "type": "pie" }], "scatter": [{ "marker": { "line": { "color": "#283442" } }, "type": "scatter" }], "scatter3d": [{ "line": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scatter3d" }], "scattercarpet": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scattercarpet" }], "scattergeo": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scattergeo" }], "scattergl": [{ "marker": { "line": { "color": "#283442" } }, "type": "scattergl" }], "scattermapbox": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scattermapbox" }], "scatterpolar": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scatterpolar" }], "scatterpolargl": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scatterpolargl" }], "scatterternary": [{ "marker": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "type": "scatterternary" }], "surface": [{ "colorbar": { "outlinewidth": 0, "ticks": "" }, "colorscale": [[0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1, "#f0f921"]], "type": "surface" }], "table": [{ "cells": { "fill": { "color": "#506784" }, "line": { "color": "rgb(17,17,17)" } }, "header": { "fill": { "color": "#2a3f5f" }, "line": { "color": "rgb(17,17,17)" } }, "type": "table" }] },
            "layout": { "annotationdefaults": { "arrowcolor": "#f2f5fa", "arrowhead": 0, "arrowwidth": 1 }, "coloraxis": { "colorbar": { "outlinewidth": 0, "ticks": "" } }, "colorscale": { "diverging": [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]], "sequential": [[0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1, "#f0f921"]], "sequentialminus": [[0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1, "#f0f921"]] }, "colorway": ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], "font": { "color": "#f2f5fa" }, "geo": { "bgcolor": "rgb(17,17,17)", "lakecolor": "rgb(17,17,17)", "landcolor": "rgb(17,17,17)", "showlakes": true, "showland": true, "subunitcolor": "#506784" }, "hoverlabel": { "align": "left" }, "hovermode": "closest", "mapbox": { "style": "dark" }, "paper_bgcolor": "rgb(17,17,17)", "plot_bgcolor": "rgb(17,17,17)", "polar": { "angularaxis": { "gridcolor": "#506784", "linecolor": "#506784", "ticks": "" }, "bgcolor": "rgb(17,17,17)", "radialaxis": { "gridcolor": "#506784", "linecolor": "#506784", "ticks": "" } }, "scene": { "xaxis": { "backgroundcolor": "rgb(17,17,17)", "gridcolor": "#506784", "gridwidth": 2, "linecolor": "#506784", "showbackground": true, "ticks": "", "zerolinecolor": "#C8D4E3" }, "yaxis": { "backgroundcolor": "rgb(17,17,17)", "gridcolor": "#506784", "gridwidth": 2, "linecolor": "#506784", "showbackground": true, "ticks": "", "zerolinecolor": "#C8D4E3" }, "zaxis": { "backgroundcolor": "rgb(17,17,17)", "gridcolor": "#506784", "gridwidth": 2, "linecolor": "#506784", "showbackground": true, "ticks": "", "zerolinecolor": "#C8D4E3" } }, "shapedefaults": { "line": { "color": "#f2f5fa" } }, "sliderdefaults": { "bgcolor": "#C8D4E3", "bordercolor": "rgb(17,17,17)", "borderwidth": 1, "tickwidth": 0 }, "ternary": { "aaxis": { "gridcolor": "#506784", "linecolor": "#506784", "ticks": "" }, "baxis": { "gridcolor": "#506784", "linecolor": "#506784", "ticks": "" }, "bgcolor": "rgb(17,17,17)", "caxis": { "gridcolor": "#506784", "linecolor": "#506784", "ticks": "" } }, "title": props.layout.title, "updatemenudefaults": { "bgcolor": "#506784", "borderwidth": 0 }, "xaxis": { "automargin": true, "gridcolor": "#283442", "linecolor": "#506784", "ticks": "", "title": { "standoff": 15 }, "zerolinecolor": "#283442", "zerolinewidth": 2 }, "yaxis": { "automargin": true, "gridcolor": "#283442", "linecolor": "#506784", "ticks": "", "title": { "standoff": 15 }, "zerolinecolor": "#283442", "zerolinewidth": 2 } }
        },
        "xaxis":
        {
            "anchor": "y",
            "domain": [0, 1],
            "title": { "text": props.layout.xaxis.title }
        },
        "yaxis":
        {
            "anchor": "x",
            "domain": [0, 1],
            "title": { "text": props.layout.yaxis.title }
        }
    }
    const options = {
        "responsive": true,
        scrollZoom: true
    }

    return (Plotly.newPlot(props.div, data, layout, options));

}

export default function Plots(props){


    axios.get(`http://172.31.25.48:8888/api/series/?friendly_hash=${props.locationFriendlyHash}&case_type=confirmed`)
            .then(res => {
                console.log('plots', res.data)
                const cases_plot_data = {
                    div: 'c_cases_plot',
                    data:
                    {
                        type: 'scatter',
                        name: 'confirmed cases',
                        x: res.data.x_axis,
                        y: res.data.cases,
                        xaxis: 'date',
                        yaxis: 'cases'
                    },
                    layout: 
                    {
                        title: res.data.location + ' - Confirmed Cases vs. Date',
                        xaxis: { title: 'date' },
                        yaxis: { title: 'confirmed cases' }
                    }
                }
                Plot(cases_plot_data);
                
                const percent_growth_plot_data = {
                    div: 'c_perc_growth_plot',
                    data:
                    {
                        type: 'bar',
                        name: 'percent growth',
                        x: res.data.x_axis,
                        y: res.data.percent_growth,
                        xaxis: 'date',
                        yaxis: '%'
                    },
                    layout: 
                    {
                        title: res.data.location + ' - Confirmed Cases Percent Growth vs. Date',
                        xaxis: { title: 'date' },
                        yaxis: { title: '%' }
                    }
                }
                Plot(percent_growth_plot_data);
                
                const cases_growth_plot_data = {
                    div: 'c_growth_plot',
                    data:
                    {
                        type: 'bar',
                        name: 'cases growth',
                        x: res.data.x_axis,
                        y: res.data.growth,
                        xaxis: 'date',
                        yaxis: 'cases'
                    },
                    layout: 
                    {
                        title: res.data.location + ' - Confirmed Cases Growth vs. Date',
                        xaxis: { title: 'date' },
                        yaxis: { title: 'confirmed cases' }
                    }
                }
                Plot(cases_growth_plot_data);

            }
            )


        axios.get(`http://172.31.25.48:8888/api/series/?friendly_hash=${props.locationFriendlyHash}&case_type=deaths`)
            .then(res => {
                const deaths_plot_data = {
                    div: 'd_cases_plot',
                    data:
                    {
                        type: 'scatter',
                        name: 'deaths',
                        x: res.data.x_axis,
                        y: res.data.cases,
                        xaxis: 'date',
                        yaxis: 'deaths'
                    },
                    layout: 
                    {
                        title: res.data.location + ' - Deaths vs. Date',
                        xaxis: { title: 'date' },
                        yaxis: { title: 'deaths' }
                    }
                }
                Plot(deaths_plot_data);


                const deaths_percent_growth_plot_data = {
                    div: 'd_perc_growth_plot',
                    data:
                    {
                        type: 'bar',
                        name: 'deaths percent growth',
                        x: res.data.x_axis,
                        y: res.data.percent_growth,
                        xaxis: 'date',
                        yaxis: 'percent growth'
                    },
                    layout: 
                    {
                        title: res.data.location + ' - Deaths Percent Growth vs. Date',
                        xaxis: { title: 'date' },
                        yaxis: { title: '%' }
                    }
                }
                Plot(deaths_percent_growth_plot_data);


                const deaths_growth_plot_data = {
                    div: 'd_growth_plot',
                    data:
                    {
                        type: 'bar',
                        name: 'deaths growth',
                        x: res.data.x_axis,
                        y: res.data.growth,
                        xaxis: 'date',
                        yaxis: 'deaths growth'
                    },
                    layout: 
                    {
                        title: res.data.location + ' - Deaths Growth vs. Date',
                        xaxis: { title: 'date' },
                        yaxis: { title: 'deaths growth' }
                    }
                }
                Plot(deaths_growth_plot_data);
                
            }
            )

            axios.get(`http://172.31.25.48:8888/api/series/?friendly_hash=${props.locationFriendlyHash}&case_type=recovered`)
            .then(res => {
                if (res.data.x_axis.length > 0){
                    const recovered_plot_data = {
                        div: 'r_cases_plot',
                        data:
                        {
                            type: 'scatter',
                            name: 'recovered',
                            x: res.data.x_axis,
                            y: res.data.cases,
                            xaxis: 'date',
                            yaxis: 'recovered'
                        },
                        layout: 
                        {
                            title: res.data.location + ' - Recovered vs. Date',
                            xaxis: { title: 'date' },
                            yaxis: { title: 'recovered' }
                        }
                    }
                    Plot(recovered_plot_data);


                    const recovered_percent_growth_plot_data = {
                        div: 'r_perc_growth_plot',
                        data:
                        {
                            type: 'bar',
                            name: 'recovered percent growth',
                            x: res.data.x_axis,
                            y: res.data.percent_growth,
                            xaxis: 'date',
                            yaxis: 'percent growth'
                        },
                        layout: 
                        {
                            title: res.data.location + ' - Recovered Cases Percent Growth vs. Date',
                            xaxis: { title: 'date' },
                            yaxis: { title: '%' }
                        }
                    }
                    Plot(recovered_percent_growth_plot_data);


                    const recovered_growth_plot_data = {
                        div: 'r_growth_plot',
                        data:
                        {
                            type: 'bar',
                            name: 'recovered growth',
                            x: res.data.x_axis,
                            y: res.data.growth,
                            xaxis: 'date',
                            yaxis: 'recovered growth'
                        },
                        layout: 
                        {
                            title: res.data.location + ' - Recovered Cases Growth vs. Date',
                            xaxis: { title: 'date' },
                            yaxis: { title: 'recovered growth' }
                        }
                    }
                    Plot(recovered_growth_plot_data);
                }
            }
            )
}