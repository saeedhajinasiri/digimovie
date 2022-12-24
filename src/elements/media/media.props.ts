import {ReactNode} from "react";

export interface MediaProps {
  children?: ReactNode

  style?: any

  at?: "xs" | "sm" | "md" | "lg" | undefined

  lessThan?: "sm" | "md" | "lg" | undefined

  greaterThan?: "xs" | "sm" | "md" | undefined

  greaterThanOrEqual?: "xs" | "sm" | "md" | "lg" | undefined

  between?: "xs-sm" | "xs-md" | "sm-md" | undefined
}
