export type DayOfWeek =  
    'Sunday'| 'Monday' | 
    'Tuesday' | 'Wednesday' | 
    'Thursday' | 'Friday' | 'Saturday'

export function analyzeLifeRange(
    currentAge: number,
    targetAge: number,
    dayFilter?: DayOfWeek[],
) {
    const today = new Date()
    const yearsToTarget = targetAge - currentAge
    const startDate = today
    const endDate = (new Date(today))
    endDate.setFullYear(endDate.getFullYear() + yearsToTarget)

    const totalDays = Math.floor(
        (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
    )

    const dayCounts: Record<DayOfWeek, number> = {
        Sunday: 0,
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday: 0,
        Friday: 0,
        Saturday: 0,
    }

    const current = new Date(startDate)
    while (current <= endDate) {
        const day = current.toLocaleDateString('en-US', { weekday: 'long' }) as DayOfWeek
        dayCounts[day]++
        current.setDate(current.getDate() + 1)
    }

    const filteredCounts = dayFilter ? 
        Object.fromEntries(
            Object.entries(dayCounts).filter(([day]) => dayFilter.includes(day as DayOfWeek))
        ) 
        : dayCounts
    
    return {
        totalDays,
        from: startDate.toDateString(),
        to: endDate.toDateString(),
        dayCounts: filteredCounts,
    }

}