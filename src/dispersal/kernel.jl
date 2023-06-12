
@kwdef struct DispersalKernel
    func::Function = (x, decay) -> exp(-x * decay) # a function mapping (x, decay) to a value in [0,1]
    decay = 3.0 # a positive real number 
    threshold = 0.01 # cutoff threshold for a value of func to be considered 0
end
function (dk::DispersalKernel)(x)
    f = dk.func(x, dk.decay)
    f > dk.threshold ? f : 0
end

Base.string(kern::DispersalKernel) = """
{bold}Kernel: {/bold}{green}$(kern.func){/green}
{bold}Decay: {/bold}{yellow}$(kern.decay){/yellow}
{bold}Threshold: {/bold}{#a686eb}$(kern.threshold){/#a686eb}
"""
Base.show(io::IO, ::MIME"text/plain", kern::DispersalKernel) = print(
    io,
    string(
        Panel(
            string(kern);
            title = string(typeof(kern)),
            style = "#a686eb  dim",
            title_style = "default #a686eb bold",
            width = 35,
            padding = (2, 2, 1, 1),
        ),
    ),
)

function kernel_matrix(space, kernel)
    distmat = distance_matrix(space)
    broadcast(x -> x == 0 ? 0 : kernel(x), distmat)
end


dk = DispersalKernel()