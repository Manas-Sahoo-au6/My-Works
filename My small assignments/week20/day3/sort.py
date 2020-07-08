def myfunc(a):
    for i in range(len(a)):
        a[i]=tuple(reversed(a[i]))
    return a
d={'a':98,'z':40,'e':65}
print(d)
a=list(d.items())
myfunc(a)
c=dict(a)
e=sorted(c.items())
f=myfunc(e)
g=dict(f)
print(g)
h=e[::-1]
i=dict(h)
print(i)