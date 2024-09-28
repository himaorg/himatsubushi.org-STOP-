# 参考：https://www.youtube.com/watch?v=V2u1FRjIuD4

# pygameを読み込む
import pygame

# game.pyを読み込む。Gameクラスを作る
from python.PACMAN.game import Game

# 画面サイズを設定
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 576

def main():
    """"""
    main関数
    """"""

    # pygameを初期化。最初に必ず必要な処理。
    pygame.init()

    # 画面のサイズを設定
    screen = pygame.display.set_mode((SCREEN_WIDTH,SCREEN_HEIGHT))
    # 画面のタイトルを決定
    pygame.display.set_caption("PACMAN")