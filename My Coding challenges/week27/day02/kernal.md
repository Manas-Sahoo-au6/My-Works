# what is kernal ?


>Definition: The operating system provides us a graphic interface to give the command to the computer system. But system can’t understand these commands directly. Translation of code into binary language done by the core component of an operating system (OS), i.e., KERNEL. User deal with the lowest layer of kernel and then kernel deal with system.


## Type of Kernal 

### Monolithic Kernel

>A monolithic kernel is a single code program with the ability to load OS services in single address space of memory (Kernel Space).All OS services run in privileged mode. All services like memory management process management, I/O drivers, and memory driver’s lies in kernel space reduce access time give higher performance.

Monolithic kernel code is more significant than microkernel code. Due to large size, it is difficult to maintain the kernel. If services occur in kernel code, the entire system will stop to work. A monolithic kernel is not portable, so different platform required different kernel


### Microkernel

Microkernel used both kernel and userspace to run all the system processes. Kernel divided into various processes known as services. Minimum of services like IPC (Inter-Process Communication), basic scheduler, or scheduling primitives, basic memory handling, primary I/O primitives are in kernel space. All services like Scheduler, memory handling, file systems, and network stacks are separately running in userspace. It reduces the size of kernel
