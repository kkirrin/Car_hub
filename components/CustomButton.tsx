'use client'
import { CustomButtonProps } from "@/types/types"
import Image from "next/image"

const CustomButton = ({btnType,  title, containerStyles, textStyles, rightIcon, handleClick}: CustomButtonProps) => {
  return (
    <button 
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>

      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} className="object-contain" fill alt="right arrow"/>
        </div>
      )}
    </button>
  )
}

export default CustomButton