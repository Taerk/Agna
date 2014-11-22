Agna 1.2
====

## Basic Setup
Flash overlay for streams, mostly for XSplit

1. Download 'AgnaPanel.exe'
2. Run it
3. Choose your XSplit directory (if it asks for it)
4. Place 'agna.swf' file it creates into XSplit
5. Go to Settings > Flash Settings (Ctrl+F) and set up your layout

##Did you know?

- You can click and drag a text field's content to swap it with another field?
- If you put %p1% in a text field, it will replace that with Player 1's content. It works with other fields too! (Hover over a text field to get its "key")
- If you open 'agna.swf' you can hold "G" and click with your mouse to get coordinates, this will help you lay out your text (tap "G" to get rid of it)
- The above works even better when you load a sample of the overlay, so you can actually see what you're doing

##How To
####Load an Overlay
**Difficulty: 1/5**

1. Open 'agna.as' using any text editor (i.e. Notepad)
2. Find the function 'firstLoad()'
3. Change 'sample_overlay.png' to the image you want to load
4. Change load_overlay.x and load_overlay.y to the position you want the image to load to


####Multiple Scenes
**Difficulty: 3/5**

1. Make a copy of 'agna.swf' and rename it (maybe something like 'scene2.swf' or 'agna2.swf')
2. Go into Flash Settings and click the '+' next to the 'File' dropdown
3. Enter the filename of the file you made in step 1
4. If done correctly, it will take the text from '_global' but the position information will be independent


####Custom Transition
**Difficulty: 5/5**

*Previous programming experience will probably be needed to do this*

1. Open 'agna.as' using any text editor (i.e. Notepad)
2. Find the function 'animate()'
3. Enter a new case before 'default :' (you can just copy another transition)
4. The case name will be the "id" for the transition, in the same line add "[Agna:transition_name]" where "transition_name" is the name you want it to show up in AgnaPanel
5. You can either make your transition under the new case, or make it redirect to a function
6. The 'animate()' is called every frame after the text is changed
