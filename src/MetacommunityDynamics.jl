module MetacommunityDynamics

    using Distributions
    using Term
    using UnicodePlots
    using Distances


    include(joinpath("spatialgraph.jl"))

    include(joinpath("dispersal", "kernel.jl"))
    include(joinpath("dispersal", "potential.jl"))

    include("species.jl")


    export SpatialGraph
    export DispersalKernel
    export DispersalPotential

    export Species, SpeciesPool, Niche, GaussianNiche

end # module