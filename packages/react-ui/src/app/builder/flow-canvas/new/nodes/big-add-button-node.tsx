import { DragMoveEvent, useDndMonitor, useDroppable } from '@dnd-kit/core';
import { Handle, Position } from '@xyflow/react';
import { Plus } from 'lucide-react';
import React, { useId, useState } from 'react';

import { PieceSelector } from '@/app/builder/pieces-selector';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FlowOperationType, isNil } from '@activepieces/shared';
import { useBuilderStateContext } from '../../../builder-hooks';
import { ApBigAddButtonNode } from '../types';
import { flowUtilConsts } from '../consts';

const ApBigAddButtonCanvasNode = React.memo(
  ({ data }: Omit<ApBigAddButtonNode, 'position'>) => {
    const [isIsStepInsideDropzone, setIsStepInsideDropzone] = useState(false);
    const [actionMenuOpen, setActionMenuOpen] = useState(false);
    const [readonly, activeDraggingStep] = useBuilderStateContext((state) => [
      state.readonly,
      state.activeDraggingStep,
    ]);
    const id = useId();
    const { setNodeRef } = useDroppable({
      id,
      data: {
        accepts: flowUtilConsts.DRAGGED_STEP_TAG,
        ...data,
      },
    });
    const showDropIndicator = !isNil(activeDraggingStep);

    useDndMonitor({
      onDragMove(event: DragMoveEvent) {
        setIsStepInsideDropzone(event.over?.id === id);
      },
      onDragEnd() {
        setIsStepInsideDropzone(false);
      },
    });
    return (
      <>
        <div
          style={{
            height: `${flowUtilConsts.AP_NODE_SIZE.STEP.height}px`,
            width: `${flowUtilConsts.AP_NODE_SIZE.STEP.width}px`,
          }}
          className="flex justify-center items-center"
        >
          {!readonly && (
            <div
              style={{
                height: `${flowUtilConsts.AP_NODE_SIZE.BIG_ADD_BUTTON.height}px`,
                width: `${flowUtilConsts.AP_NODE_SIZE.BIG_ADD_BUTTON.width}px`,
              }}
              className=" cursor-auto border-none flex items-center justify-center relative "
            >
              <div
                style={{
                  height: `${flowUtilConsts.AP_NODE_SIZE.BIG_ADD_BUTTON.height}px`,
                  width: `${flowUtilConsts.AP_NODE_SIZE.BIG_ADD_BUTTON.width}px`,
                }}
                className={cn('  rounded bg-accent', {
                  'bg-primary/80': showDropIndicator || actionMenuOpen,
                  'shadow-add-button': isIsStepInsideDropzone || actionMenuOpen,
                  'transition-all':
                    isIsStepInsideDropzone ||
                    actionMenuOpen ||
                    showDropIndicator,
                })}
              >
                {!showDropIndicator && (
                  <PieceSelector
                    operation={{
                      type: FlowOperationType.ADD_ACTION,
                      actionLocation: {
                        parentStep: data.parentStepName,
                        stepLocationRelativeToParent:
                          data.stepLocationRelativeToParent,
                        branchIndex: -1,
                        branchName: '',
                      },
                    }}
                    open={actionMenuOpen}
                    onOpenChange={setActionMenuOpen}
                  >
                    <Button
                      variant="transparent"
                      className="w-full h-full hover:bg-accent-foreground rounded"
                    >
                      <Plus
                        className={cn('w-6 h-6 text-accent-foreground ', {
                          'opacity-0': showDropIndicator || actionMenuOpen,
                        })}
                      />
                    </Button>
                  </PieceSelector>
                )}
              </div>
              {showDropIndicator && (
                <div
                  style={{
                    height: `${flowUtilConsts.AP_NODE_SIZE.STEP.height}px`,
                    width: `${flowUtilConsts.AP_NODE_SIZE.STEP.width}px`,
                    top: `-${
                      flowUtilConsts.AP_NODE_SIZE.STEP.height / 2 -
                      flowUtilConsts.AP_NODE_SIZE.BIG_ADD_BUTTON.width / 2
                    }px`,
                  }}
                  className=" absolute "
                  ref={setNodeRef}
                >
                  {' '}
                </div>
              )}
            </div>
          )}
          {readonly && (
            <div
              style={{
                height: `${flowUtilConsts.AP_NODE_SIZE.STEP.height}px`,
                width: `${flowUtilConsts.AP_NODE_SIZE.STEP.width}px`,
              }}
              className="border cursor-auto border-solid border-none flex items-center justify-center relative "
            >
              <svg
                className="overflow-visible  "
                style={{
                  stroke:
                    'var(--xy-edge-stroke, var(--xy-edge-stroke-default))',
                }}
                shapeRendering="auto"
              >
                <g>
                  <path
                    d="M 150 0 V 100"
                    fill="transparent"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            </div>
          )}
        </div>

        <Handle
          type="source"
          position={Position.Bottom}
          style={flowUtilConsts.HANDLE_STYLING}
        />
        <Handle
          type="target"
          position={Position.Top}
          style={flowUtilConsts.HANDLE_STYLING}
        />
      </>
    );
  },
);

ApBigAddButtonCanvasNode.displayName = 'ApBigAddButtonCanvasNode';
export { ApBigAddButtonCanvasNode };
