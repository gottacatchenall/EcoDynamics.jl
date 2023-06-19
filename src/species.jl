
"""
    SpeciesPool{T<:Number}

A `SpeciesPool` consists of a set of species and their corresponding traits. 
"""
struct SpeciesPool{T<:Number}
    species
    traits::Dict{Symbol, Vector{T}} 
end

function SpeciesPool(n::Integer)
    species =  [Symbol("s$i") for i in 1:n]
    traits::Dict{Symbol, Vector} = Dict(:x=>rand(length(species)))
end

function SpeciesPool(; traits = Dict(:x=>rand(length(5))))
    ns = length(traits[first(keys(traits))])
    species =  [Symbol("s$i") for i in 1:ns]
    SpeciesPool(species, traits)
end

# ====================================================
#
#   Constructors
#
# =====================================================

Base.getindex(sp::SpeciesPool, i::I) where I<:Integer = sp.species[i]
Base.string(sp::SpeciesPool) = """A {#e691c1}{bold}species pool{/bold}{/#e691c1} with {bold}{blue}$(length(sp.species)){/blue}{/bold} species."""
Base.show(io::IO, ::MIME"text/plain", sp::SpeciesPool) = begin 
    tprint(io, string(sp))
end
Base.size(sp::SpeciesPool) = length(sp.species)
Base.length(sp::SpeciesPool) = size(sp)

numspecies(sp::SpeciesPool) = length(sp)
traitnames(sp::SpeciesPool) = Tuple(keys(sp.traits))
traitdims(sp::SpeciesPool) = length(traitnames(sp))

struct Species{T<:Number}
    traits::Dict{Symbol, T}
end 