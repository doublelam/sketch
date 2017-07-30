module ProcessImg where
import Data.Array
import Data.Maybe(Maybe)
-- import MabeConvert(maybeArr)

-- import Data.Array.Partial (head)
import Prelude (otherwise, (<=))
-- import DataTypes

type Pixel = {rawRGB :: Array Int,opacity :: Maybe Int,grayscale :: Int}

reorderImgArr :: Array Int -> Array Pixel
reorderImgArr = _rIA []
  where  
    _rIA :: Array Pixel -> Array Int -> Array Pixel
    _rIA pixels xs
      | length xs <= 4 = pixels
      | otherwise = _rIA (headArr: pixels) (drop 4xs)
      where headArr = {rawRGB: take 3 xs,opacity: last xs,grayscale: 255}

  -- | length xs <= 4 = [headArr]
  -- where headArr = {rawRGB: take 3 xs,opacity: last xs,grayscale: 255}
  -- | otherwise      = headArr : reorderImgArr (maybeArr (drop 4 xs))
  -- where  
  --   headArr = {rawRGB: take 3 xs,opacity: last xs,grayscale: 255}

