# Pikt anthology

The simplest of all is just a box.

```pikt
box "Pikt"
```

The box is perhaps too big, let's scale it.

```pikt
scale = 1.2

box "Pikt"
```

We could do with a richer example, so lets add a few more objects and arrows.

```pikt
scale = 1.2

A: box "A" rad 5px width 50px
move
B: box "B" same
C: box "C" same at A + (0, -100px)
D: circle "D" at B + (0, -100px) width 50px fill lightcyan

arrow from A.end to B.start
arrow color tomato from C.ne to B.sw
dot at C.ne color tomato diameter 5px
```

We could explore splines don't we?

```pikt
scale = 1.2

spline from (0, 0) \
to (0, 50px) \
then 50px heading 80 \
then 50px heading 10 \
then 90px heading 170 \
then go right 50px \
then go up 50px \
then go right 5px \
then go down 50px \
```

Or go all in

```pikt
$r = 0.2in
linerad = 0.75*$r
linewid = 0.25

# Start and end blocks
#
box "element" bold fit
line down 50% from last box.sw
dot rad 250% color black
X0: last.e + (0.3,0)
arrow from last dot to X0
move right 3.9in
box wid 5% ht 25% fill black
X9: last.w - (0.3,0)
arrow from X9 to last box.w


# The main rule that goes straight through from start to finish
#
box "object-definition" italic fit at 11/16 way between X0 and X9
arrow to X9
arrow from X0 to last box.w

# The LABEL: rule
#
arrow right $r from X0 then down 1.25*$r then right $r
oval " LABEL " fit
arrow 50%
oval "\":\"" fit
arrow 200%
box "position" italic fit
arrow
line right until even with X9 - ($r,0) \
  then up until even with X9 then to X9
arrow from last oval.e right $r*0.5 then up $r*0.8 right $r*0.8
line up $r*0.45 right $r*0.45 then right

# The VARIABLE = rule
#
arrow right $r from X0 then down 2.5*$r then right $r
oval " VARIABLE " fit
arrow 70%
box "assignment-operator" italic fit
arrow 70%
box "expr" italic fit
line right until even with X9 - ($r,0) \
  then up until even with X9 then to X9

# The PRINT rule
#
arrow right $r from X0 then down 3.75*$r then right $r
oval "\"print\"" fit
arrow
box "print-args" italic fit
line right until even with X9 - ($r,0) \
  then up until even with X9 then to X9
```



And finally, all types of object

```pikt
box "box"
circle "circle" at 1 right of previous
ellipse "ellipse" at 1 right of previous
oval "oval" at .8 below first box
cylinder "cylinder" at 1 right of previous
file "file" at 1 right of previous
line "line" above from .8 below last oval.w
arrow "arrow" above from 1 right of previous
spline from previous+(1.8cm,-.2cm) \
   go right .15 then .3 heading 30 then .5 heading 160 then .4 heading 20 \
   then right .15
"spline" at 3rd vertex of previous
dot at .6 below last line
text "dot" with .s at .2cm above previous.n
arc from 1 right of previous dot
text "arc" at (previous.start, previous.end)
text "text" at 1.3 right of start of previous arc
````