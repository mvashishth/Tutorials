from bokeh.plotting import figure, output_file, show
import numpy as np

# prepare some data
x = np.linspace(0,10,20)
A=-2
B=2
C=0
y = A*np.multiply(x,x) + B*x +C

# output to static HTML file
output_file("lines.html")

# create a new plot with a title and axis labels
p = figure(title="simple line example", x_axis_label='x', y_axis_label='y')

# add a line renderer with legend and line thickness
p.line(x, y, legend_label="Temp.", line_width=2)

# show the results
show(p)
