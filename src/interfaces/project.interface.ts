export interface TechInterface {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    label: string
    iconsStyles?: string
}

export interface ProjectInterface {
    title: string,
    description: string
    image: string
    link: string
    code?:string
    icons?: TechInterface[]
}