module ProcessImg where
-- import Data.Array (length, take, last, drop, (!!))
import Data.Array (fromFoldable) as A
import Data.Foldable (sum)
import Data.List (List(..), (:), take, (!!), drop, length, fromFoldable) as L
import MabeConvert (maybeInt)
import Mathematics (closest')
import Prelude (otherwise, (/), (<>),(>=),(-),(+))
-- import Mathematics as M
-- import DataTypes

-- type Pixel = {rawRGB :: Array Int,opacity :: Int,grayscale :: Int}

-- reorderImgArr :: Array Int -> Array Pixel
-- reorderImgArr = _rIA []
--   where  
--     _rIA :: Array Pixel -> Array Int -> Array Pixel
--     _rIA pixels xs
--       | length xs <= 4 = pixels
--       | otherwise = _rIA (pixels <> [headArr]) (drop 4 xs)
--       where 
--         rawRGB = take 3 xs
--         headArr = {rawRGB: rawRGB,opacity: maybeInt (last xs),grayscale: (sum rawRGB) / 3}



transformToGray :: Array Int -> Array Int
transformToGray xs = A.fromFoldable (transformToGray' (L.fromFoldable xs))

transformToGray' :: L.List Int -> L.List Int
transformToGray' = _tfTG L.Nil 0
  where
    _tfTG :: L.List Int -> Int -> L.List Int -> L.List Int
    _tfTG newArr n allArr
      | n >= L.length allArr - 4 = newArr
      | otherwise = _tfTG arrN (n + 4) allArr
      where 
        fstA = maybeInt (allArr L.!! n)
        scdA = maybeInt (allArr L.!! (n + 1))
        thrdA = maybeInt (allArr L.!! (n + 2))
        frthA = maybeInt (allArr L.!! (n + 3))
        gray = (fstA + scdA + thrdA) / 3
        rangeC = 0 L.: 50 L.: 225 L.: L.Nil
        reGray = closest' gray rangeC
        arrN = newArr <> reGray L.: reGray L.: reGray L.: frthA L.: L.Nil
    
    {- temporate hidden -}
    -- _tfTG :: L.List Int -> L.List Int -> L.List Int
    -- _tfTG xs L.Nil = xs
    -- _tfTG xs ys = _tfTG (xs <> reGray L.: reGray L.: reGray L.: maybeInt opacity L.: L.Nil) (L.drop 4 ys)
    --   where
    --     rawRGB = L.take 3 ys
    --     gray = (sum rawRGB) / 3
    --     opacity = ys L.!! 3
    --     -- rangeC = 0 L.: 85 L.: 170 L.: 255 L.: L.Nil
    --     rangeC = 0 L.: 50 L.: 225 L.: L.Nil
    --     reGray = closest' gray rangeC
    {- end -}

-- resetGray :: Int -> Int -> Int
-- resetGray c series = getClosest [n * a | (n * a) <= z, a <-[1..]]

-- getClosest :: Int -> Array Int
-- getClosest n xs




