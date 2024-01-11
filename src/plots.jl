
makieplot(traj::Trajectory) = makieplot(traj.prob.model, traj)



function makieplot(m::Model{Community,M,Local,D}, traj) where {M<:Union{Biomass,Abundance},D}
    ns = numspecies(m)
    time = traj.sol.t

    f = Figure()
    ax = Axis(
        f[1,1],
        xlabel="Time",
        ylabel=string(M)
    )

    xs = hcat(Array(traj.sol.u)...)
    for s in 1:ns
        scatterlines!(ax, time, xs[s,:])
    end
    f
end 



function makieplot(::Model{Population,M,Local,D}, traj) where {M<:Union{Biomass,Abundance},D}
    time = traj.sol.t
    f = Figure()
    ax = Axis(
        f[1,1],
        xlabel="Time",
        ylabel=string(M)
    )
    xs = Array(traj.sol)
    scatterlines!(ax, time, xs)
    f
end 

function makieplot(::Model{Metapopulation,Occupancy,S,D}, traj) where {S,D}
    time = traj.sol.t
    f = Figure()
    ax = Axis(
        f[1,1],
        xlabel="Time",
        ylabel="Proportion Occupied",
    )
    ylims!(ax, 0,1)
    xs = Array(traj.sol)
    prop = [sum(c)/length(c) for c in eachcol(xs)]

    scatterlines!(ax, time, prop)
    f
end 


function makieplot(::Model{Population,M,Spatial,D}, traj) where {M<:Union{Biomass,Abundance},D}
    a = Array(traj.sol.u)
    T = length(a)
    num_pops = length(a[1])
    
    timeseries = [[a[t][p] for t in 1:T] for p in 1:num_pops]
    ymax = max([extrema(x)[2] for x in timeseries]...)
    
    f = Figure()
    ax = Axis(
        f[1,1],
        xlabel="Time",
        ylabel="Proportion Occupied",
    )
    ylims!(ax, 0, ymax)

    for ts in timeseries
        scatterlines!(ax, ts)
    end
    f
end 


function makieplot(::Model{Community,M,Spatial,D}, traj) where {M<:Union{Biomass,Abundance},D}
    u = Array(traj.sol)    
    n_species, n_locations, n_timesteps = size(u)
    ymax = max(u...)
         
    cols = n_species < 7 ? [:blue, :red, :green, :red, :purple, :red] : fill(:blue, n_species)
    
    f = Figure()
    ax = Axis(
        f[1,1],
        xlabel="Time",
        ylabel="Proportion Occupied",
    )
    ylims!(ax, 0, ymax)


    for s in eachslice(u, dims=(2))
        for sp in 1:n_species
            scatterlines!(ax, p, s[sp,:], color=cols[sp])
        end
    end 
    f
end 

function makieplot(kern::DispersalKernel)
    xs = LinRange(0, kern.max_distance, 99)
    ys = [kern.func.(x, kern.decay) for x in xs]
    
    ys = ys ./ sum(ys)

    xs = vcat(xs, 2xs[end]-xs[end-1])
    ys = vcat(ys, 0)

    lines(xs, ys)
    current_figure()
end

function replplot(m::Model{Community,M,Local,D}, traj) where {M<:Union{Biomass,Abundance},D}
    ns = numspecies(m)
    time = traj.sol.t
    u = timeseries(traj)
    ymax = max([extrema(x)[2] for x in timeseries(traj)]...)
    ts(s) = [mean(u[t][s,:]) for t in 1:length(traj)]

    height,width = displaysize(stdout)    
    p = lineplot(time, ts(1), 
        xlabel="time (t)", 
        ylabel=string(M), 
        width=width-40,
        ylim=(0,ymax)
    )

    for i in 2:length(u[1])
        lineplot!(p, ts(i))
    end 
    p
end 


function replplot(::Model{Population,M,Local,D}, traj) where {M<:Union{Biomass,Abundance},D}
    time = traj.sol.t
    u = timeseries(traj)
    ymax = max([extrema(x)[2] for x in timeseries(traj)]...)
    _,width = displaysize(stdout)    
    p = lineplot(time, [u[t] for t in 1:length(traj)], 
        xlabel="time (t)", 
        ylabel=string(M),
        width=width-40,
        ylim=(0,ymax)
    )
    p
end 


function replplot(::Model{Population,M,Spatial,D}, traj) where {M<:Union{Biomass,Abundance},D}
    a = Array(traj.sol.u)
    T = length(a)
    num_pops = length(a[1])
    
    timeseries = [[a[t][p] for t in 1:T] for p in 1:num_pops]
    ymax = max([extrema(x)[2] for x in timeseries]...)
    _,width = displaysize(stdout)    
    p = lineplot(timeseries[1], 
        xlabel="time (t)", 
        ylabel=string(M), 
        width=width-40,
        ylim=(0,ymax)
    )

    for ts in timeseries[2:end]
        lineplot!(p, ts)
    end
    p
end 

function replplot(::Model{Community,M,Spatial,D}, traj) where {M<:Union{Biomass,Abundance},D}
    u = Array(traj.sol)    
    n_species, n_locations, n_timesteps = size(u)
    ymax = max(u...)
    _,width = displaysize(stdout)    

    p = lineplot(u[1,1,:], 
        xlabel="time (t)", 
        ylabel="Biomass", 
        width=width-40,
        ylim=(0,ymax))
         
    cols = n_species < 7 ? [:blue, :red, :green, :red, :purple, :red] : fill(:blue, n_species)
    for s in eachslice(u, dims=(2))
        for sp in 1:n_species
            lineplot!(p, s[sp,:], color=cols[sp])
        end
    end 
    p
end 
