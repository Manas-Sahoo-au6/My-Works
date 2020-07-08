## Components
***
>process is the abstraction used by UNIX to represent a running program.
>  It is the object through which a program’s use of memory, processor time, and   I/O resources can be managed and monitored.
>It is part of the UNIX philosophy that as much work as possible be done within the context of processes, rather than handled specially by the kernel.  Although portions of the kernel cannot be made to fit this model, it is used by most system software. 
> System and user processes all follow the same rules so that you can use a single set of tools to control them both.
***
___
# Components of a Process allowed
>A process consists of an address space and a set of data structures with the kernel.  The address space is a set of memory pages that the kernel has marked for the process’s use. 
> It contains the code and libraries that the process is executing, the process’s variables, its stacks, and various extra information needed by the kernel while the process is running.  
>Since UNIX supports virtual memory, there is notnecessarily a correlation between a page’s location within an address space and its location inside the machine’s physical memory or swap space.The kernel’s internal data structures record various pieces of information about each process.  
